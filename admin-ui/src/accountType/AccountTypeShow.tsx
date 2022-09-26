import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { ACCOUNTTYPE_TITLE_FIELD } from "./AccountTypeTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";

export const AccountTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Account Category" source="accountCategory" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Unit" source="unit" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Account"
          target="AccountTypeId"
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
      </SimpleShowLayout>
    </Show>
  );
};
