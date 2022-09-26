import { AccountUpdateManyWithoutAccountTypesInput } from "./AccountUpdateManyWithoutAccountTypesInput";

export type AccountTypeUpdateInput = {
  accountCategory?:
    | "Asset"
    | "Liability"
    | "Equity"
    | "Revenue"
    | "Expense"
    | "NonPosting";
  accounts?: AccountUpdateManyWithoutAccountTypesInput;
  name?: string | null;
  unit?: "Currency" | "Stock";
};
