import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { TRANSACTIONLINE_TITLE_FIELD } from "../transactionLine/TransactionLineTitle";
import { TRANSACTIONSCHEDULE_TITLE_FIELD } from "../transactionSchedule/TransactionScheduleTitle";

export const ScheduleEntryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Schedule Entries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Account" source="account.id" reference="Account">
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
    </List>
  );
};
