import { Book } from "../book/Book";
import { Transaction } from "../transaction/Transaction";

export type Currency = {
  books?: Array<Book>;
  code: string;
  createdAt: Date;
  id: string;
  isPrimary: boolean | null;
  name: string;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
