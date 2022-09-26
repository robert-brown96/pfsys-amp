import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { ScheduleEntryCreateNestedManyWithoutTransactionLinesInput } from "./ScheduleEntryCreateNestedManyWithoutTransactionLinesInput";
import { InputJsonValue } from "../../types";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type TransactionLineCreateInput = {
  account: AccountWhereUniqueInput;
  createdFromSchedule?: ScheduleEntryCreateNestedManyWithoutTransactionLinesInput;
  credit?: number | null;
  data?: InputJsonValue;
  debit?: number | null;
  entity?: EntityWhereUniqueInput | null;
  isReconciled?: boolean | null;
  memo?: string | null;
  transaction: TransactionWhereUniqueInput;
};
