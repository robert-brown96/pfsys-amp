import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TransactionTitle } from "../transaction/TransactionTitle";
import { JobTypeTitle } from "../jobType/JobTypeTitle";

export const JobEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Completed On" source="completedOn" />
        <ReferenceArrayInput
          source="createdTransactions"
          reference="Transaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionTitle} />
        </ReferenceArrayInput>
        <div />
        <div />
        <ReferenceInput
          source="jobtype.id"
          reference="JobType"
          label="Job Type"
        >
          <SelectInput optionText={JobTypeTitle} />
        </ReferenceInput>
        <DateTimeInput label="Last Retry" source="lastRetry" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Not Started", value: "NotStarted" },
            { label: "Processing", value: "Processing" },
            { label: "Complete", value: "Complete" },
            { label: "Processing Failed", value: "ProcessingFailed" },
            { label: "Get Data", value: "GetData" },
            { label: "Get Failed", value: "GetFailed" },
            { label: "Pending Processing", value: "PendingProcessing" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
