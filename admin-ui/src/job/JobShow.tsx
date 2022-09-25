import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { JOBTYPE_TITLE_FIELD } from "../jobType/JobTypeTitle";

export const JobShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
