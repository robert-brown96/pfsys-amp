import { SortOrder } from "../../util/SortOrder";

export type JobTypeOrderByInput = {
  createdAt?: SortOrder;
  destination?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  source?: SortOrder;
  updatedAt?: SortOrder;
};
