import { JobTypeWhereInput } from "./JobTypeWhereInput";
import { JobTypeOrderByInput } from "./JobTypeOrderByInput";

export type JobTypeFindManyArgs = {
  where?: JobTypeWhereInput;
  orderBy?: Array<JobTypeOrderByInput>;
  skip?: number;
  take?: number;
};
