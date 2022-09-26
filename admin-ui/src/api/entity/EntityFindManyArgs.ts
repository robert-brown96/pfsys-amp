import { EntityWhereInput } from "./EntityWhereInput";
import { EntityOrderByInput } from "./EntityOrderByInput";

export type EntityFindManyArgs = {
  where?: EntityWhereInput;
  orderBy?: Array<EntityOrderByInput>;
  skip?: number;
  take?: number;
};
