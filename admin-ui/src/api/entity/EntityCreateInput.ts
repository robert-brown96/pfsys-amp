import { InputJsonValue } from "../../types";
import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { TransactionLineCreateNestedManyWithoutEntitiesInput } from "./TransactionLineCreateNestedManyWithoutEntitiesInput";

export type EntityCreateInput = {
  data?: InputJsonValue;
  defaultAccount?: AccountWhereUniqueInput | null;
  name: string;
  transactionLines?: TransactionLineCreateNestedManyWithoutEntitiesInput;
};
