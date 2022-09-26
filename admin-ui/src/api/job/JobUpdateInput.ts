import { TransactionUpdateManyWithoutJobsInput } from "./TransactionUpdateManyWithoutJobsInput";
import { InputJsonValue } from "../../types";
import { JobTypeWhereUniqueInput } from "../jobType/JobTypeWhereUniqueInput";

export type JobUpdateInput = {
  completedOn?: Date | null;
  createdTransactions?: TransactionUpdateManyWithoutJobsInput;
  dataIn?: InputJsonValue;
  dataOut?: InputJsonValue;
  jobType?: JobTypeWhereUniqueInput;
  lastRetry?: Date | null;
  status?:
    | "NotStarted"
    | "Processing"
    | "Complete"
    | "ProcessingFailed"
    | "GetData"
    | "GetFailed"
    | "PendingProcessing";
};
