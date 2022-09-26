import { AccountTypeWhereInput } from "./AccountTypeWhereInput";
import { AccountTypeOrderByInput } from "./AccountTypeOrderByInput";

export type AccountTypeFindManyArgs = {
  where?: AccountTypeWhereInput;
  orderBy?: Array<AccountTypeOrderByInput>;
  skip?: number;
  take?: number;
};
