import { TransactionLineWhereInput } from "./TransactionLineWhereInput";
import { TransactionLineOrderByInput } from "./TransactionLineOrderByInput";

export type TransactionLineFindManyArgs = {
  where?: TransactionLineWhereInput;
  orderBy?: Array<TransactionLineOrderByInput>;
  skip?: number;
  take?: number;
};
