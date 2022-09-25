import { User } from "../user/User";
import { Currency } from "../currency/Currency";

export type Book = {
  createdAt: Date;
  id: string;
  isPrimary: boolean | null;
  name: string;
  owner?: User | null;
  primaryCurrency?: Currency;
  updatedAt: Date;
};
