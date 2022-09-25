import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
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
import { TransactionLineTitle } from "../transactionLine/TransactionLineTitle";

export const AccountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
        <BooleanInput label="External" source="isExternal" />
        <BooleanInput label="Summary" source="isSummary" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="account.id" reference="Account" label="Parent">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="transactionLines"
          reference="TransactionLine"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionLineTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
