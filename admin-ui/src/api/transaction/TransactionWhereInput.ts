import { BookListRelationFilter } from "../book/BookListRelationFilter";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { TransactionLineListRelationFilter } from "../transactionLine/TransactionLineListRelationFilter";

export type TransactionWhereInput = {
  book?: BookListRelationFilter;
  currency?: CurrencyWhereUniqueInput;
  id?: StringFilter;
  trandate?: DateTimeFilter;
  transactionLines?: TransactionLineListRelationFilter;
};
