import { SortOrder } from "../../util/SortOrder";

export type AccountTypeOrderByInput = {
  accountCategory?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  unit?: SortOrder;
  updatedAt?: SortOrder;
};
