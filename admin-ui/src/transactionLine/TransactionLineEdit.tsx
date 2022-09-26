import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { ScheduleEntryTitle } from "../scheduleEntry/ScheduleEntryTitle";
import { EntityTitle } from "../entity/EntityTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";

export const TransactionLineEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="account.id" reference="Account" label="Account">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="createdFromSchedule"
          reference="ScheduleEntry"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScheduleEntryTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Credit" source="credit" />
        <div />
        <NumberInput label="Debit" source="debit" />
        <ReferenceInput source="entity.id" reference="Entity" label="Entity">
          <SelectInput optionText={EntityTitle} />
        </ReferenceInput>
        <BooleanInput label="Reconciled" source="isReconciled" />
        <TextInput label="Memo" source="memo" />
        <ReferenceInput
          source="transaction.id"
          reference="Transaction"
          label="Transaction"
        >
          <SelectInput optionText={TransactionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
