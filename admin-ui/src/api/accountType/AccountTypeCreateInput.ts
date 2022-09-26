import { AccountCreateNestedManyWithoutAccountTypesInput } from "./AccountCreateNestedManyWithoutAccountTypesInput";

export type AccountTypeCreateInput = {
  accountCategory:
    | "Asset"
    | "Liability"
    | "Equity"
    | "Revenue"
    | "Expense"
    | "NonPosting";
  accounts?: AccountCreateNestedManyWithoutAccountTypesInput;
  name?: string | null;
  unit: "Currency" | "Stock";
};
