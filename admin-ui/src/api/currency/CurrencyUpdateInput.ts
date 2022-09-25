import { BookUpdateManyWithoutCurrenciesInput } from "./BookUpdateManyWithoutCurrenciesInput";
import { TransactionUpdateManyWithoutCurrenciesInput } from "./TransactionUpdateManyWithoutCurrenciesInput";

export type CurrencyUpdateInput = {
  books?: BookUpdateManyWithoutCurrenciesInput;
  code?: string;
  isPrimary?: boolean | null;
  name?: string;
  transactions?: TransactionUpdateManyWithoutCurrenciesInput;
};
