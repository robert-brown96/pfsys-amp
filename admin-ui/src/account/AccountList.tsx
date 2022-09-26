import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { ACCOUNTTYPE_TITLE_FIELD } from "../accountType/AccountTypeTitle";
import { ACCOUNT_TITLE_FIELD } from "./AccountTitle";

export const AccountList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Accounts"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="Parent" source="account.id" reference="Account">
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
