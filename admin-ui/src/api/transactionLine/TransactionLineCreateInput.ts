import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type TransactionLineCreateInput = {
  account: AccountWhereUniqueInput;
  credit?: number | null;
  data?: InputJsonValue;
  debit?: number | null;
  isReconciled?: boolean | null;
  memo?: string | null;
  transaction: TransactionWhereUniqueInput;
};
