import { ScheduleEntryWhereInput } from "./ScheduleEntryWhereInput";
import { ScheduleEntryOrderByInput } from "./ScheduleEntryOrderByInput";

export type ScheduleEntryFindManyArgs = {
  where?: ScheduleEntryWhereInput;
  orderBy?: Array<ScheduleEntryOrderByInput>;
  skip?: number;
  take?: number;
};
