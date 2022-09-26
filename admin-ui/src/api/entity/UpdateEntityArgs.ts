import { EntityWhereUniqueInput } from "./EntityWhereUniqueInput";
import { EntityUpdateInput } from "./EntityUpdateInput";

export type UpdateEntityArgs = {
  where: EntityWhereUniqueInput;
  data: EntityUpdateInput;
};
