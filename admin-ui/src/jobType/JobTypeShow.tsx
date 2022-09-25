import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { JOBTYPE_TITLE_FIELD } from "./JobTypeTitle";

export const JobTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Destination" source="destination" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Source" source="source" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Job" target="JobTypeId" label="Jobs">
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
