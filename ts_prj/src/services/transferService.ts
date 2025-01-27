import { Transaction, ITransaction } from "../models/transactionModel";
import logger from "../config/logger";

const transactions: Map<string, ITransaction> = new Map();

export class TransferService {
  static async transferFunds(
    fromAccount: string,
    toAccount: string,
    amount: number,
  ): Promise<ITransaction> {
    for (const transaction of transactions.values()) {
      if (
        transaction.fromAccount === fromAccount &&
        transaction.toAccount === toAccount &&
        transaction.amount === amount &&
        new Date().getTime() - transaction.timestamp.getTime() < 5000
      ) {
        throw new Error("Duplicate transaction detected");
      }
    }

    const transaction = new Transaction(fromAccount, toAccount, amount);
    transactions.set(transaction.id, transaction);

    logger.info(`Transaction saved: ${JSON.stringify(transaction)}`);

    return transaction;
  }
}
