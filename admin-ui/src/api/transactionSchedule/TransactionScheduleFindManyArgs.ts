import { TransactionScheduleWhereInput } from "./TransactionScheduleWhereInput";
import { TransactionScheduleOrderByInput } from "./TransactionScheduleOrderByInput";

export type TransactionScheduleFindManyArgs = {
  where?: TransactionScheduleWhereInput;
  orderBy?: Array<TransactionScheduleOrderByInput>;
  skip?: number;
  take?: number;
};
