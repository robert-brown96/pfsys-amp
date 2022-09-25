import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { JobTypeTitle } from "../jobType/JobTypeTitle";

export const JobEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Completed On" source="completedOn" />
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
