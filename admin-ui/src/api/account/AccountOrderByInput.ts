import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  accountNumber?: SortOrder;
  accountTypeId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isExternal?: SortOrder;
  isSummary?: SortOrder;
  name?: SortOrder;
  parentId?: SortOrder;
  updatedAt?: SortOrder;
};
