import { InputJsonValue } from "../../types";
import { ScheduleEntryCreateNestedManyWithoutTransactionSchedulesInput } from "./ScheduleEntryCreateNestedManyWithoutTransactionSchedulesInput";

export type TransactionScheduleCreateInput = {
  data?: InputJsonValue;
  name: string;
  scheduleEntries?: ScheduleEntryCreateNestedManyWithoutTransactionSchedulesInput;
  scheduleType: "Loan" | "Amortization" | "Depreciation" | "Expense" | "Income";
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
