import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { ScheduleEntryListRelationFilter } from "../scheduleEntry/ScheduleEntryListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type TransactionLineWhereInput = {
  account?: AccountWhereUniqueInput;
  createdFromSchedule?: ScheduleEntryListRelationFilter;
  credit?: FloatNullableFilter;
  data?: JsonFilter;
  debit?: FloatNullableFilter;
  entity?: EntityWhereUniqueInput;
  id?: StringFilter;
  isReconciled?: BooleanNullableFilter;
  memo?: StringNullableFilter;
  transaction?: TransactionWhereUniqueInput;
};
