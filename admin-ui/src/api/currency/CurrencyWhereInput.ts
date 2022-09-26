import { BookListRelationFilter } from "../book/BookListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type CurrencyWhereInput = {
  books?: BookListRelationFilter;
  code?: StringFilter;
  id?: StringFilter;
  isPrimary?: BooleanNullableFilter;
  name?: StringFilter;
  transactions?: TransactionListRelationFilter;
};
