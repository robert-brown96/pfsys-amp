import { TransactionSchedule as TTransactionSchedule } from "../api/transactionSchedule/TransactionSchedule";

export const TRANSACTIONSCHEDULE_TITLE_FIELD = "name";

export const TransactionScheduleTitle = (
  record: TTransactionSchedule
): string => {
  return record.name || record.id;
};
