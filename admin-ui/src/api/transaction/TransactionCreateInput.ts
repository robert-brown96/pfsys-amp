import { BookCreateNestedManyWithoutTransactionsInput } from "./BookCreateNestedManyWithoutTransactionsInput";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { TransactionLineCreateNestedManyWithoutTransactionsInput } from "./TransactionLineCreateNestedManyWithoutTransactionsInput";

export type TransactionCreateInput = {
  book?: BookCreateNestedManyWithoutTransactionsInput;
  createdFromJob?: JobWhereUniqueInput | null;
  currency: CurrencyWhereUniqueInput;
  trandate: Date;
  transactionLines?: TransactionLineCreateNestedManyWithoutTransactionsInput;
};
