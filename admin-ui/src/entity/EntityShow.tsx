import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { ENTITY_TITLE_FIELD } from "./EntityTitle";
import { TRANSACTION_TITLE_FIELD } from "../transaction/TransactionTitle";

export const EntityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Data" source="data" />
        <ReferenceField
          label="Default Account"
          source="account.id"
          reference="Account"
        >
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="TransactionLine"
          target="EntityId"
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
            <ReferenceField
              label="Entity"
              source="entity.id"
              reference="Entity"
            >
              <TextField source={ENTITY_TITLE_FIELD} />
            </ReferenceField>
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
