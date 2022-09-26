import { AccountTypeWhereUniqueInput } from "../accountType/AccountTypeWhereUniqueInput";
import { AccountUpdateManyWithoutAccountsInput } from "./AccountUpdateManyWithoutAccountsInput";
import { EntityUpdateManyWithoutAccountsInput } from "./EntityUpdateManyWithoutAccountsInput";
import { AccountWhereUniqueInput } from "./AccountWhereUniqueInput";
import { ScheduleEntryUpdateManyWithoutAccountsInput } from "./ScheduleEntryUpdateManyWithoutAccountsInput";
import { TransactionLineUpdateManyWithoutAccountsInput } from "./TransactionLineUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  accountNumber?: number;
  accountType?: AccountTypeWhereUniqueInput;
  childAccounts?: AccountUpdateManyWithoutAccountsInput;
  entities?: EntityUpdateManyWithoutAccountsInput;
  isExternal?: boolean | null;
  isSummary?: boolean | null;
  name?: string;
  parent?: AccountWhereUniqueInput | null;
  scheduleEntries?: ScheduleEntryUpdateManyWithoutAccountsInput;
  transactionLines?: TransactionLineUpdateManyWithoutAccountsInput;
};
