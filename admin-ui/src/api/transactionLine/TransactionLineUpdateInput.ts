import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { ScheduleEntryUpdateManyWithoutTransactionLinesInput } from "./ScheduleEntryUpdateManyWithoutTransactionLinesInput";
import { InputJsonValue } from "../../types";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type TransactionLineUpdateInput = {
  account?: AccountWhereUniqueInput;
  createdFromSchedule?: ScheduleEntryUpdateManyWithoutTransactionLinesInput;
  credit?: number | null;
  data?: InputJsonValue;
  debit?: number | null;
  entity?: EntityWhereUniqueInput | null;
  isReconciled?: boolean | null;
  memo?: string | null;
  transaction?: TransactionWhereUniqueInput;
};
