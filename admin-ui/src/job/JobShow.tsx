import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { JOB_TITLE_FIELD } from "./JobTitle";
import { CURRENCY_TITLE_FIELD } from "../currency/CurrencyTitle";
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
        <ReferenceManyField
          reference="Transaction"
          target="JobId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
