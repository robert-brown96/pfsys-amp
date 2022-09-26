import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  createdAt?: SortOrder;
  createdFromJobId?: SortOrder;
  currencyId?: SortOrder;
  data?: SortOrder;
  id?: SortOrder;
  trandate?: SortOrder;
  updatedAt?: SortOrder;
};
