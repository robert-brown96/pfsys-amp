import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobTypeWhereUniqueInput } from "../jobType/JobTypeWhereUniqueInput";

export type JobWhereInput = {
  completedOn?: DateTimeNullableFilter;
  createdTransactions?: TransactionListRelationFilter;
  id?: StringFilter;
  jobType?: JobTypeWhereUniqueInput;
  lastRetry?: DateTimeNullableFilter;
  status?:
    | "NotStarted"
    | "Processing"
    | "Complete"
    | "ProcessingFailed"
    | "GetData"
    | "GetFailed"
    | "PendingProcessing";
};
