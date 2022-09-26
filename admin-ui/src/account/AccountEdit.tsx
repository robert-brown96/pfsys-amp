import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { AccountTypeTitle } from "../accountType/AccountTypeTitle";
import { AccountTitle } from "./AccountTitle";
import { EntityTitle } from "../entity/EntityTitle";
import { ScheduleEntryTitle } from "../scheduleEntry/ScheduleEntryTitle";
import { TransactionLineTitle } from "../transactionLine/TransactionLineTitle";

export const AccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Account Number" source="accountNumber" />
        <ReferenceInput
          source="accounttype.id"
          reference="AccountType"
          label="Account Type"
        >
          <SelectInput optionText={AccountTypeTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="childAccounts"
          reference="Account"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccountTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="entities"
          reference="Entity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EntityTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="External" source="isExternal" />
        <BooleanInput label="Summary" source="isSummary" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="account.id" reference="Account" label="Parent">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="scheduleEntries"
          reference="ScheduleEntry"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScheduleEntryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="transactionLines"
          reference="TransactionLine"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionLineTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
