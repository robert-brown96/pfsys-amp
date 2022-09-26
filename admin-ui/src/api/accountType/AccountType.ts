import { Account } from "../account/Account";

export type AccountType = {
  accountCategory?:
    | "Asset"
    | "Liability"
    | "Equity"
    | "Revenue"
    | "Expense"
    | "NonPosting";
  accounts?: Array<Account>;
  createdAt: Date;
  id: string;
  name: string | null;
  unit?: "Currency" | "Stock";
  updatedAt: Date;
};
