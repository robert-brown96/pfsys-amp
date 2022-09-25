import { Book } from "../book/Book";
import { Job } from "../job/Job";
import { Currency } from "../currency/Currency";
import { TransactionLine } from "../transactionLine/TransactionLine";

export type Transaction = {
  book?: Array<Book>;
  createdAt: Date;
  createdFromJob?: Job | null;
  currency?: Currency;
  id: string;
  trandate: Date;
  transactionLines?: Array<TransactionLine>;
  updatedAt: Date;
};
