import { JsonValue } from "type-fest";
import { Job } from "../job/Job";

export type JobType = {
  createdAt: Date;
  destination: JsonValue;
  id: string;
  jobs?: Array<Job>;
  name: string;
  source: JsonValue;
  updatedAt: Date;
};
