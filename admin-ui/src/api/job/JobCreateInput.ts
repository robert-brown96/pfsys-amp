import { TransactionCreateNestedManyWithoutJobsInput } from "./TransactionCreateNestedManyWithoutJobsInput";
import { InputJsonValue } from "../../types";
import { JobTypeWhereUniqueInput } from "../jobType/JobTypeWhereUniqueInput";

export type JobCreateInput = {
  completedOn?: Date | null;
  createdTransactions?: TransactionCreateNestedManyWithoutJobsInput;
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
