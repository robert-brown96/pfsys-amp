import { BookUpdateManyWithoutTransactionsInput } from "./BookUpdateManyWithoutTransactionsInput";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { TransactionLineUpdateManyWithoutTransactionsInput } from "./TransactionLineUpdateManyWithoutTransactionsInput";

export type TransactionUpdateInput = {
  book?: BookUpdateManyWithoutTransactionsInput;
  currency?: CurrencyWhereUniqueInput;
  trandate?: Date;
  transactionLines?: TransactionLineUpdateManyWithoutTransactionsInput;
};
