import { ScheduleEntry as TScheduleEntry } from "../api/scheduleEntry/ScheduleEntry";

export const SCHEDULEENTRY_TITLE_FIELD = "memo";

export const ScheduleEntryTitle = (record: TScheduleEntry): string => {
  return record.memo || record.id;
};
