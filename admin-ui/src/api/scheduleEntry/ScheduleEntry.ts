import { Account } from "../account/Account";
import { TransactionLine } from "../transactionLine/TransactionLine";
import { TransactionSchedule } from "../transactionSchedule/TransactionSchedule";

export type ScheduleEntry = {
  account?: Account;
  amount: number;
  createdAt: Date;
  createdTransactionLine?: TransactionLine | null;
  generateDate: Date;
  id: string;
  memo: string | null;
  postDate: Date | null;
  status?:
    | "NotStarted"
    | "PendingTransactionCreation"
    | "TransactionCreated"
    | "Error";
  transactionSchedule?: TransactionSchedule;
  updatedAt: Date;
};
