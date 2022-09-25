import { BookUpdateManyWithoutCurrenciesInput } from "./BookUpdateManyWithoutCurrenciesInput";

export type CurrencyUpdateInput = {
  books?: BookUpdateManyWithoutCurrenciesInput;
  code?: string;
  isPrimary?: boolean | null;
  name?: string;
};
