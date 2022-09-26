import { JobType as TJobType } from "../api/jobType/JobType";

export const JOBTYPE_TITLE_FIELD = "name";

export const JobTypeTitle = (record: TJobType): string => {
  return record.name || record.id;
};
