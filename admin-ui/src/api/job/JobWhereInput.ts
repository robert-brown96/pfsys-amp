import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobTypeWhereUniqueInput } from "../jobType/JobTypeWhereUniqueInput";

export type JobWhereInput = {
  completedOn?: DateTimeNullableFilter;
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
