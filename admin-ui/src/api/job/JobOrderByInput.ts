import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  completedOn?: SortOrder;
  createdAt?: SortOrder;
  dataIn?: SortOrder;
  dataOut?: SortOrder;
  id?: SortOrder;
  jobTypeId?: SortOrder;
  lastRetry?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
