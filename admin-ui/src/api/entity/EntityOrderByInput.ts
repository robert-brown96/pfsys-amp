import { SortOrder } from "../../util/SortOrder";

export type EntityOrderByInput = {
  createdAt?: SortOrder;
  data?: SortOrder;
  defaultAccountId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
