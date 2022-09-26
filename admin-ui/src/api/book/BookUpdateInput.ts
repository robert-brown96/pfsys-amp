import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { TransactionUpdateManyWithoutBooksInput } from "./TransactionUpdateManyWithoutBooksInput";

export type BookUpdateInput = {
  isPrimary?: boolean | null;
  name?: string;
  owner?: UserWhereUniqueInput | null;
  primaryCurrency?: CurrencyWhereUniqueInput;
  transactions?: TransactionUpdateManyWithoutBooksInput;
};
