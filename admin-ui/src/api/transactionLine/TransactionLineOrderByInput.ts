import { SortOrder } from "../../util/SortOrder";

export type TransactionLineOrderByInput = {
  accountId?: SortOrder;
  createdAt?: SortOrder;
  credit?: SortOrder;
  data?: SortOrder;
  debit?: SortOrder;
  id?: SortOrder;
  isReconciled?: SortOrder;
  memo?: SortOrder;
  transactionId?: SortOrder;
  updatedAt?: SortOrder;
};
