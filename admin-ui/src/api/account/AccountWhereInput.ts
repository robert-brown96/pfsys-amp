import { IntFilter } from "../../util/IntFilter";
import { AccountTypeWhereUniqueInput } from "../accountType/AccountTypeWhereUniqueInput";
import { AccountListRelationFilter } from "./AccountListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { AccountWhereUniqueInput } from "./AccountWhereUniqueInput";
import { ScheduleEntryListRelationFilter } from "../scheduleEntry/ScheduleEntryListRelationFilter";
import { TransactionLineListRelationFilter } from "../transactionLine/TransactionLineListRelationFilter";

export type AccountWhereInput = {
  accountNumber?: IntFilter;
  accountType?: AccountTypeWhereUniqueInput;
  childAccounts?: AccountListRelationFilter;
  id?: StringFilter;
  isExternal?: BooleanNullableFilter;
  isSummary?: BooleanNullableFilter;
  name?: StringFilter;
  parent?: AccountWhereUniqueInput;
  scheduleEntries?: ScheduleEntryListRelationFilter;
  transactionLines?: TransactionLineListRelationFilter;
};
