import { Account } from "../account/Account";
import { ScheduleEntry } from "../scheduleEntry/ScheduleEntry";
import { JsonValue } from "type-fest";
import { Transaction } from "../transaction/Transaction";

export type TransactionLine = {
  account?: Account;
  createdAt: Date;
  createdFromSchedule?: Array<ScheduleEntry>;
  credit: number | null;
  data: JsonValue;
  debit: number | null;
  id: string;
  isReconciled: boolean | null;
  memo: string | null;
  transaction?: Transaction;
  updatedAt: Date;
};
