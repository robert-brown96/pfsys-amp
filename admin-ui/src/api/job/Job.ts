import { JsonValue } from "type-fest";
import { JobType } from "../jobType/JobType";

export type Job = {
  completedOn: Date | null;
  createdAt: Date;
  dataIn: JsonValue;
  dataOut: JsonValue;
  id: string;
  jobType?: JobType;
  lastRetry: Date | null;
  status?:
    | "NotStarted"
    | "Processing"
    | "Complete"
    | "ProcessingFailed"
    | "GetData"
    | "GetFailed"
    | "PendingProcessing";
  updatedAt: Date;
};
