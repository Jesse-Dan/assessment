import { v4 as uuidv4 } from "uuid";

export interface ITransaction {
  id: string;
  fromAccount: string;
  toAccount: string;
  amount: number;
  timestamp: Date;
}

export class Transaction implements ITransaction {
  id: string;
  fromAccount: string;
  toAccount: string;
  amount: number;
  timestamp: Date;

  constructor(fromAccount: string, toAccount: string, amount: number) {
    this.id = uuidv4();
    this.fromAccount = fromAccount;
    this.toAccount = toAccount;
    this.amount = amount;
    this.timestamp = new Date();
  }
}
