import { AccountType as TAccountType } from "../api/accountType/AccountType";

export const ACCOUNTTYPE_TITLE_FIELD = "name";

export const AccountTypeTitle = (record: TAccountType): string => {
  return record.name || record.id;
};
