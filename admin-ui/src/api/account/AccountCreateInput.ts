import { AccountTypeWhereUniqueInput } from "../accountType/AccountTypeWhereUniqueInput";
import { AccountCreateNestedManyWithoutAccountsInput } from "./AccountCreateNestedManyWithoutAccountsInput";
import { AccountWhereUniqueInput } from "./AccountWhereUniqueInput";
import { ScheduleEntryCreateNestedManyWithoutAccountsInput } from "./ScheduleEntryCreateNestedManyWithoutAccountsInput";
import { TransactionLineCreateNestedManyWithoutAccountsInput } from "./TransactionLineCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  accountNumber: number;
  accountType: AccountTypeWhereUniqueInput;
  childAccounts?: AccountCreateNestedManyWithoutAccountsInput;
  isExternal?: boolean | null;
  isSummary?: boolean | null;
  name: string;
  parent?: AccountWhereUniqueInput | null;
  scheduleEntries?: ScheduleEntryCreateNestedManyWithoutAccountsInput;
  transactionLines?: TransactionLineCreateNestedManyWithoutAccountsInput;
};
