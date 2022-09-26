import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type BookWhereInput = {
  id?: StringFilter;
  isPrimary?: BooleanNullableFilter;
  name?: StringFilter;
  owner?: UserWhereUniqueInput;
  primaryCurrency?: CurrencyWhereUniqueInput;
  transactions?: TransactionListRelationFilter;
};
