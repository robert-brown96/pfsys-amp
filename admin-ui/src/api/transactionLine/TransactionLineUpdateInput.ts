import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { ScheduleEntryUpdateManyWithoutTransactionLinesInput } from "./ScheduleEntryUpdateManyWithoutTransactionLinesInput";
import { InputJsonValue } from "../../types";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type TransactionLineUpdateInput = {
  account?: AccountWhereUniqueInput;
  createdFromSchedule?: ScheduleEntryUpdateManyWithoutTransactionLinesInput;
  credit?: number | null;
  data?: InputJsonValue;
  debit?: number | null;
  isReconciled?: boolean | null;
  memo?: string | null;
  transaction?: TransactionWhereUniqueInput;
};
