import { InputJsonValue } from "../../types";
import { JobTypeWhereUniqueInput } from "../jobType/JobTypeWhereUniqueInput";

export type JobCreateInput = {
  completedOn?: Date | null;
  dataIn?: InputJsonValue;
  dataOut?: InputJsonValue;
  jobType: JobTypeWhereUniqueInput;
  lastRetry?: Date | null;
  status:
    | "NotStarted"
    | "Processing"
    | "Complete"
    | "ProcessingFailed"
    | "GetData"
    | "GetFailed"
    | "PendingProcessing";
};
