import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { BookTitle } from "../book/BookTitle";

export const CurrencyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="books"
          reference="Book"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookTitle} />
        </ReferenceArrayInput>
        <TextInput label="Code" source="code" />
        <BooleanInput label="isPrimary" source="isPrimary" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
