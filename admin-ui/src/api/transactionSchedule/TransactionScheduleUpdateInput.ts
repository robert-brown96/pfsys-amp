import { InputJsonValue } from "../../types";
import { ScheduleEntryUpdateManyWithoutTransactionSchedulesInput } from "./ScheduleEntryUpdateManyWithoutTransactionSchedulesInput";

export type TransactionScheduleUpdateInput = {
  data?: InputJsonValue;
  name?: string;
  scheduleEntries?: ScheduleEntryUpdateManyWithoutTransactionSchedulesInput;
  scheduleType?:
    | "Loan"
    | "Amortization"
    | "Depreciation"
    | "Expense"
    | "Income";
  status?:
    | "New"
    | "NotStarted"
    | "InProgress"
    | "PendingUpdate"
    | "FailedScheduleGeneration"
    | "Error"
    | "Complete"
    | "FailedTransactionGeneration"
    | null;
};
