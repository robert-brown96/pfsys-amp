import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { TransactionCreateNestedManyWithoutBooksInput } from "./TransactionCreateNestedManyWithoutBooksInput";

export type BookCreateInput = {
  isPrimary?: boolean | null;
  name: string;
  owner?: UserWhereUniqueInput | null;
  primaryCurrency: CurrencyWhereUniqueInput;
  transactions?: TransactionCreateNestedManyWithoutBooksInput;
};
