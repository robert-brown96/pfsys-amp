import { BookListRelationFilter } from "../book/BookListRelationFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { TransactionLineListRelationFilter } from "../transactionLine/TransactionLineListRelationFilter";

export type TransactionWhereInput = {
  book?: BookListRelationFilter;
  createdFromJob?: JobWhereUniqueInput;
  currency?: CurrencyWhereUniqueInput;
  id?: StringFilter;
  trandate?: DateTimeFilter;
  transactionLines?: TransactionLineListRelationFilter;
};
