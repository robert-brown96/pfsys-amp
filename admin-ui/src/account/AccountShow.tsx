import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACCOUNTTYPE_TITLE_FIELD } from "../accountType/AccountTypeTitle";
import { ACCOUNT_TITLE_FIELD } from "./AccountTitle";
import { TRANSACTION_TITLE_FIELD } from "../transaction/TransactionTitle";

export const AccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Account Number" source="accountNumber" />
        <ReferenceField
          label="Account Type"
          source="accounttype.id"
          reference="AccountType"
        >
          <TextField source={ACCOUNTTYPE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="External" source="isExternal" />
        <BooleanField label="Summary" source="isSummary" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Parent" source="account.id" reference="Account">
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Account"
          target="AccountId"
          label="Accounts"
        >
          <Datagrid rowClick="show">
            <TextField label="Account Number" source="accountNumber" />
            <ReferenceField
              label="Account Type"
              source="accounttype.id"
              reference="AccountType"
            >
              <TextField source={ACCOUNTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="External" source="isExternal" />
            <BooleanField label="Summary" source="isSummary" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Parent"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TransactionLine"
          target="AccountId"
          label="Transaction Lines"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Account"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Credit" source="credit" />
            <TextField label="Data" source="data" />
            <TextField label="Debit" source="debit" />
            <TextField label="ID" source="id" />
            <BooleanField label="Reconciled" source="isReconciled" />
            <TextField label="Memo" source="memo" />
            <ReferenceField
              label="Transaction"
              source="transaction.id"
              reference="Transaction"
            >
              <TextField source={TRANSACTION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
