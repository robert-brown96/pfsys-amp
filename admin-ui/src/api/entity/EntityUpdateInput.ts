import { InputJsonValue } from "../../types";
import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { TransactionLineUpdateManyWithoutEntitiesInput } from "./TransactionLineUpdateManyWithoutEntitiesInput";

export type EntityUpdateInput = {
  data?: InputJsonValue;
  defaultAccount?: AccountWhereUniqueInput | null;
  name?: string;
  transactionLines?: TransactionLineUpdateManyWithoutEntitiesInput;
};
