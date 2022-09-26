import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const JobTypeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Job Types"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Destination" source="destination" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Source" source="source" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
