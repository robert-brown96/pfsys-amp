import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { TransactionLineTitle } from "../transactionLine/TransactionLineTitle";
import { TransactionScheduleTitle } from "../transactionSchedule/TransactionScheduleTitle";

export const ScheduleEntryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="account.id" reference="Account" label="Account">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <NumberInput label="Amount" source="amount" />
        <ReferenceInput
          source="transactionline.id"
          reference="TransactionLine"
          label="Created Transaction Line"
        >
          <SelectInput optionText={TransactionLineTitle} />
        </ReferenceInput>
        <DateTimeInput label="Generate Date" source="generateDate" />
        <TextInput label="Memo" source="memo" />
        <DateTimeInput label="Post Date" source="postDate" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Not Started", value: "NotStarted" },
            {
              label: "Pending Transaction Creation",
              value: "PendingTransactionCreation",
            },
            { label: "Transaction Created", value: "TransactionCreated" },
            { label: "Error", value: "Error" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="transactionschedule.id"
          reference="TransactionSchedule"
          label="Transaction Schedule"
        >
          <SelectInput optionText={TransactionScheduleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
