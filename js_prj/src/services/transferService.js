import { Transaction } from "../models/transactionModel";
import { info } from "../config/logger";

const transactions = new Map();

class TransferService {
  static async transferFunds(fromAccount, toAccount, amount) {

    for (const [id, transaction] of transactions.entries()) {
      if (
        transaction.fromAccount === fromAccount &&
        transaction.toAccount === toAccount &&
        transaction.amount === amount &&
        new Date() - transaction.timestamp < 5000
      ) {
        throw new Error("Duplicate transaction detected");
      }
    }

    const transaction = new Transaction(fromAccount, toAccount, amount);
    transactions.set(transaction.id, transaction);

    info(`Transaction saved: ${JSON.stringify(transaction)}`);

    return transaction;
  }
}

export default TransferService;
