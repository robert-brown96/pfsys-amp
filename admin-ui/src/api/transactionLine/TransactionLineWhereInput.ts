import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type TransactionLineWhereInput = {
  account?: AccountWhereUniqueInput;
  credit?: FloatNullableFilter;
  data?: JsonFilter;
  debit?: FloatNullableFilter;
  id?: StringFilter;
  isReconciled?: BooleanNullableFilter;
  memo?: StringNullableFilter;
  transaction?: TransactionWhereUniqueInput;
};
