import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";

export const AccountTypeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="accountCategory"
          label="Account Category"
          choices={[
            { label: "Asset", value: "Asset" },
            { label: "Liability", value: "Liability" },
            { label: "Equity", value: "Equity" },
            { label: "Revenue", value: "Revenue" },
            { label: "Expense", value: "Expense" },
            { label: "Non Posting", value: "NonPosting" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="accounts"
          reference="Account"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccountTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <SelectInput
          source="unit"
          label="Unit"
          choices={[
            { label: "Currency", value: "Currency" },
            { label: "Stock", value: "Stock" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
