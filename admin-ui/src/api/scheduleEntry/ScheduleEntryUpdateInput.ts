import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { TransactionLineWhereUniqueInput } from "../transactionLine/TransactionLineWhereUniqueInput";
import { TransactionScheduleWhereUniqueInput } from "../transactionSchedule/TransactionScheduleWhereUniqueInput";

export type ScheduleEntryUpdateInput = {
  account?: AccountWhereUniqueInput;
  amount?: number;
  createdTransactionLine?: TransactionLineWhereUniqueInput | null;
  generateDate?: Date;
  memo?: string | null;
  postDate?: Date | null;
  status?:
    | "NotStarted"
    | "PendingTransactionCreation"
    | "TransactionCreated"
    | "Error";
  transactionSchedule?: TransactionScheduleWhereUniqueInput;
};
