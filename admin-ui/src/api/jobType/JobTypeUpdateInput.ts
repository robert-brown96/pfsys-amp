import { InputJsonValue } from "../../types";
import { JobUpdateManyWithoutJobTypesInput } from "./JobUpdateManyWithoutJobTypesInput";

export type JobTypeUpdateInput = {
  destination?: InputJsonValue;
  jobs?: JobUpdateManyWithoutJobTypesInput;
  name?: string;
  source?: InputJsonValue;
};
