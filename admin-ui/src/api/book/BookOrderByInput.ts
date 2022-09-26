import { SortOrder } from "../../util/SortOrder";

export type BookOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isPrimary?: SortOrder;
  name?: SortOrder;
  ownerId?: SortOrder;
  primaryCurrencyId?: SortOrder;
  updatedAt?: SortOrder;
};
