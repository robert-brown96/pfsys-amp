import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  createdAt?: SortOrder;
  currencyId?: SortOrder;
  id?: SortOrder;
  trandate?: SortOrder;
  updatedAt?: SortOrder;
};
