import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { ENTITY_TITLE_FIELD } from "../entity/EntityTitle";
import { TRANSACTION_TITLE_FIELD } from "./TransactionTitle";
import { JOB_TITLE_FIELD } from "../job/JobTitle";
import { CURRENCY_TITLE_FIELD } from "../currency/CurrencyTitle";

export const TransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Created From Job"
          source="job.id"
          reference="Job"
        >
          <TextField source={JOB_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Currency"
          source="currency.id"
          reference="Currency"
        >
          <TextField source={CURRENCY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Date" source="trandate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="TransactionLine"
          target="TransactionId"
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
