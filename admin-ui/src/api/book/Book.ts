import { User } from "../user/User";
import { Currency } from "../currency/Currency";
import { Transaction } from "../transaction/Transaction";

export type Book = {
  createdAt: Date;
  id: string;
  isPrimary: boolean | null;
  name: string;
  owner?: User | null;
  primaryCurrency?: Currency;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
