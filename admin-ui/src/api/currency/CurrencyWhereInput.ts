import { BookListRelationFilter } from "../book/BookListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type CurrencyWhereInput = {
  books?: BookListRelationFilter;
  code?: StringFilter;
  id?: StringFilter;
  isPrimary?: BooleanNullableFilter;
  name?: StringFilter;
};
