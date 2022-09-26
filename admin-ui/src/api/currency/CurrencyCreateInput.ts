import { BookCreateNestedManyWithoutCurrenciesInput } from "./BookCreateNestedManyWithoutCurrenciesInput";
import { TransactionCreateNestedManyWithoutCurrenciesInput } from "./TransactionCreateNestedManyWithoutCurrenciesInput";

export type CurrencyCreateInput = {
  books?: BookCreateNestedManyWithoutCurrenciesInput;
  code: string;
  isPrimary?: boolean | null;
  name: string;
  transactions?: TransactionCreateNestedManyWithoutCurrenciesInput;
};
