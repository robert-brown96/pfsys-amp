import { JsonValue } from "type-fest";
import { Account } from "../account/Account";
import { TransactionLine } from "../transactionLine/TransactionLine";

export type Entity = {
  createdAt: Date;
  data: JsonValue;
  defaultAccount?: Account | null;
  id: string;
  name: string;
  transactionLines?: Array<TransactionLine>;
  updatedAt: Date;
};
