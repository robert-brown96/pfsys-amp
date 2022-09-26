import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { ScheduleEntryListRelationFilter } from "../scheduleEntry/ScheduleEntryListRelationFilter";

export type TransactionScheduleWhereInput = {
  data?: JsonFilter;
  id?: StringFilter;
  name?: StringFilter;
  scheduleEntries?: ScheduleEntryListRelationFilter;
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
    | "FailedTransactionGeneration";
};
