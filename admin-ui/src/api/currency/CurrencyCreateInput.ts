import { BookCreateNestedManyWithoutCurrenciesInput } from "./BookCreateNestedManyWithoutCurrenciesInput";

export type CurrencyCreateInput = {
  books?: BookCreateNestedManyWithoutCurrenciesInput;
  code: string;
  isPrimary?: boolean | null;
  name: string;
};
