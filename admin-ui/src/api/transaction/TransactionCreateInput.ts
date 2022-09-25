import { BookCreateNestedManyWithoutTransactionsInput } from "./BookCreateNestedManyWithoutTransactionsInput";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { TransactionLineCreateNestedManyWithoutTransactionsInput } from "./TransactionLineCreateNestedManyWithoutTransactionsInput";

export type TransactionCreateInput = {
  book?: BookCreateNestedManyWithoutTransactionsInput;
  currency: CurrencyWhereUniqueInput;
  trandate: Date;
  transactionLines?: TransactionLineCreateNestedManyWithoutTransactionsInput;
};
