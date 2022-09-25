import { Account } from "../account/Account";
import { JsonValue } from "type-fest";
import { Transaction } from "../transaction/Transaction";

export type TransactionLine = {
  account?: Account;
  createdAt: Date;
  credit: number | null;
  data: JsonValue;
  debit: number | null;
  id: string;
  isReconciled: boolean | null;
  memo: string | null;
  transaction?: Transaction;
  updatedAt: Date;
};
