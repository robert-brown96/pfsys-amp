import { SortOrder } from "../../util/SortOrder";

export type ScheduleEntryOrderByInput = {
  accountId?: SortOrder;
  amount?: SortOrder;
  createdAt?: SortOrder;
  createdTransactionLineId?: SortOrder;
  generateDate?: SortOrder;
  id?: SortOrder;
  memo?: SortOrder;
  postDate?: SortOrder;
  status?: SortOrder;
  transactionScheduleId?: SortOrder;
  updatedAt?: SortOrder;
};
