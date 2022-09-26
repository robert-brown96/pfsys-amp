import { InputJsonValue } from "../../types";
import { JobCreateNestedManyWithoutJobTypesInput } from "./JobCreateNestedManyWithoutJobTypesInput";

export type JobTypeCreateInput = {
  destination: InputJsonValue;
  jobs?: JobCreateNestedManyWithoutJobTypesInput;
  name: string;
  source: InputJsonValue;
};
