import { v4 as uuidv4 } from "uuid";

class Transaction {
  constructor(fromAccount, toAccount, amount) {
    this.id = uuidv4();
    this.fromAccount = fromAccount;
    this.toAccount = toAccount;
    this.amount = amount;
    this.timestamp = new Date();
  }
}

export default Transaction;
