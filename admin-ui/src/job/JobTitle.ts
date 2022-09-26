import { Job as TJob } from "../api/job/Job";

export const JOB_TITLE_FIELD = "id";

export const JobTitle = (record: TJob): string => {
  return record.id || record.id;
};
