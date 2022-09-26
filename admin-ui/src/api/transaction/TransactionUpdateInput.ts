import { BookUpdateManyWithoutTransactionsInput } from "./BookUpdateManyWithoutTransactionsInput";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TransactionLineUpdateManyWithoutTransactionsInput } from "./TransactionLineUpdateManyWithoutTransactionsInput";

export type TransactionUpdateInput = {
  book?: BookUpdateManyWithoutTransactionsInput;
  createdFromJob?: JobWhereUniqueInput | null;
  currency?: CurrencyWhereUniqueInput;
  data?: InputJsonValue;
  trandate?: Date;
  transactionLines?: TransactionLineUpdateManyWithoutTransactionsInput;
};
