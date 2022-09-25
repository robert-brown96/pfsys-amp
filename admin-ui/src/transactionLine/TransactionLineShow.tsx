import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { TRANSACTIONLINE_TITLE_FIELD } from "./TransactionLineTitle";
import { TRANSACTIONSCHEDULE_TITLE_FIELD } from "../transactionSchedule/TransactionScheduleTitle";
import { TRANSACTION_TITLE_FIELD } from "../transaction/TransactionTitle";

export const TransactionLineShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Account" source="account.id" reference="Account">
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
        <ReferenceManyField
          reference="ScheduleEntry"
          target="TransactionLineId"
          label="Schedule Entries"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Account"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Created Transaction Line"
              source="transactionline.id"
              reference="TransactionLine"
            >
              <TextField source={TRANSACTIONLINE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Generate Date" source="generateDate" />
            <TextField label="ID" source="id" />
            <TextField label="Memo" source="memo" />
            <TextField label="Post Date" source="postDate" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Transaction Schedule"
              source="transactionschedule.id"
              reference="TransactionSchedule"
            >
              <TextField source={TRANSACTIONSCHEDULE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
