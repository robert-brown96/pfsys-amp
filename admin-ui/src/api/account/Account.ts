import { AccountType } from "../accountType/AccountType";
import { ScheduleEntry } from "../scheduleEntry/ScheduleEntry";
import { TransactionLine } from "../transactionLine/TransactionLine";

export type Account = {
  accountNumber: number;
  accountType?: AccountType;
  childAccounts?: Array<Account>;
  createdAt: Date;
  id: string;
  isExternal: boolean | null;
  isSummary: boolean | null;
  name: string;
  parent?: Account | null;
  scheduleEntries?: Array<ScheduleEntry>;
  transactionLines?: Array<TransactionLine>;
  updatedAt: Date;
};
