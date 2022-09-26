import { SortOrder } from "../../util/SortOrder";

export type TransactionScheduleOrderByInput = {
  createdAt?: SortOrder;
  data?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  scheduleType?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
