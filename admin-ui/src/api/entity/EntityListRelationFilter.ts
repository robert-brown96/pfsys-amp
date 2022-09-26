import { EntityWhereInput } from "./EntityWhereInput";

export type EntityListRelationFilter = {
  every?: EntityWhereInput;
  some?: EntityWhereInput;
  none?: EntityWhereInput;
};
