import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";

export const TransactionLineCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="account.id" reference="Account" label="Account">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <NumberInput label="Credit" source="credit" />
        <div />
        <NumberInput label="Debit" source="debit" />
        <BooleanInput label="Reconciled" source="isReconciled" />
        <TextInput label="Memo" source="memo" />
        <ReferenceInput
          source="transaction.id"
          reference="Transaction"
          label="Transaction"
        >
          <SelectInput optionText={TransactionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
