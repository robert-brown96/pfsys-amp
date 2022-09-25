import { Account as TAccount } from "../api/account/Account";

export const ACCOUNT_TITLE_FIELD = "name";

export const AccountTitle = (record: TAccount): string => {
  return record.name || record.id;
};
