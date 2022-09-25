import { AccountType } from "../accountType/AccountType";
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
  transactionLines?: Array<TransactionLine>;
  updatedAt: Date;
};
