import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AccountTypeWhereInput = {
  accountCategory?:
    | "Asset"
    | "Liability"
    | "Equity"
    | "Revenue"
    | "Expense"
    | "NonPosting";
  accounts?: AccountListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  unit?: "Currency" | "Stock";
};
