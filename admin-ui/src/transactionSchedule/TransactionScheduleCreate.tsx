import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
} from "react-admin";

import { ScheduleEntryTitle } from "../scheduleEntry/ScheduleEntryTitle";

export const TransactionScheduleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="scheduleEntries"
          reference="ScheduleEntry"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScheduleEntryTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="scheduleType"
          label="Schedule Type"
          choices={[
            { label: "Loan", value: "Loan" },
            { label: "Amortization", value: "Amortization" },
            { label: "Depreciation", value: "Depreciation" },
            { label: "Expense", value: "Expense" },
            { label: "Income", value: "Income" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "New", value: "New" },
            { label: "Not Started", value: "NotStarted" },
            { label: "In Progress", value: "InProgress" },
            { label: "Pending Update", value: "PendingUpdate" },
            {
              label: "Failed Schedule Generation",
              value: "FailedScheduleGeneration",
            },
            { label: "Error", value: "Error" },
            { label: "Complete", value: "Complete" },
            {
              label: "Failed Transaction Generation",
              value: "FailedTransactionGeneration",
            },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
