import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { JOBTYPE_TITLE_FIELD } from "../jobType/JobTypeTitle";

export const JobList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Jobs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Completed On" source="completedOn" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="DataIn" source="dataIn" />
        <TextField label="DataOut" source="dataOut" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Job Type"
          source="jobtype.id"
          reference="JobType"
        >
          <TextField source={JOBTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Last Retry" source="lastRetry" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
