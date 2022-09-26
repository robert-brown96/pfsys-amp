import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { BookTitle } from "../book/BookTitle";
import { JobTitle } from "../job/JobTitle";
import { CurrencyTitle } from "../currency/CurrencyTitle";
import { TransactionLineTitle } from "../transactionLine/TransactionLineTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="book"
          reference="Book"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="job.id"
          reference="Job"
          label="Created From Job"
        >
          <SelectInput optionText={JobTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="currency.id"
          reference="Currency"
          label="Currency"
        >
          <SelectInput optionText={CurrencyTitle} />
        </ReferenceInput>
        <DateTimeInput label="Date" source="trandate" />
        <ReferenceArrayInput
          source="transactionLines"
          reference="TransactionLine"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionLineTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
