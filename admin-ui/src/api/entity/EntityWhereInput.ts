import { JsonFilter } from "../../util/JsonFilter";
import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TransactionLineListRelationFilter } from "../transactionLine/TransactionLineListRelationFilter";

export type EntityWhereInput = {
  data?: JsonFilter;
  defaultAccount?: AccountWhereUniqueInput;
  id?: StringFilter;
  name?: StringFilter;
  transactionLines?: TransactionLineListRelationFilter;
};
