import { Book } from "../book/Book";
import { Currency } from "../currency/Currency";
import { TransactionLine } from "../transactionLine/TransactionLine";

export type Transaction = {
  book?: Array<Book>;
  createdAt: Date;
  currency?: Currency;
  id: string;
  trandate: Date;
  transactionLines?: Array<TransactionLine>;
  updatedAt: Date;
};
