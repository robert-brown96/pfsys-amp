import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";
import { TransactionLineWhereUniqueInput } from "../transactionLine/TransactionLineWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TransactionScheduleWhereUniqueInput } from "../transactionSchedule/TransactionScheduleWhereUniqueInput";

export type ScheduleEntryWhereInput = {
  account?: AccountWhereUniqueInput;
  amount?: FloatFilter;
  createdTransactionLine?: TransactionLineWhereUniqueInput;
  generateDate?: DateTimeFilter;
  id?: StringFilter;
  memo?: StringNullableFilter;
  postDate?: DateTimeNullableFilter;
  status?:
    | "NotStarted"
    | "PendingTransactionCreation"
    | "TransactionCreated"
    | "Error";
  transactionSchedule?: TransactionScheduleWhereUniqueInput;
};
