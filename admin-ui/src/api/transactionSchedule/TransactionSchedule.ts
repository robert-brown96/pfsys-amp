import { JsonValue } from "type-fest";
import { ScheduleEntry } from "../scheduleEntry/ScheduleEntry";

export type TransactionSchedule = {
  createdAt: Date;
  data: JsonValue;
  id: string;
  name: string;
  scheduleEntries?: Array<ScheduleEntry>;
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
  updatedAt: Date;
};
