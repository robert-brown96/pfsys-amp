import { BookCreateNestedManyWithoutTransactionsInput } from "./BookCreateNestedManyWithoutTransactionsInput";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TransactionLineCreateNestedManyWithoutTransactionsInput } from "./TransactionLineCreateNestedManyWithoutTransactionsInput";

export type TransactionCreateInput = {
  book?: BookCreateNestedManyWithoutTransactionsInput;
  createdFromJob?: JobWhereUniqueInput | null;
  currency: CurrencyWhereUniqueInput;
  data?: InputJsonValue;
  trandate: Date;
  transactionLines?: TransactionLineCreateNestedManyWithoutTransactionsInput;
};
