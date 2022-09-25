import { SortOrder } from "../../util/SortOrder";

export type CurrencyOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isPrimary?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
