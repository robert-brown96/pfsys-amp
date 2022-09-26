import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobListRelationFilter } from "../job/JobListRelationFilter";

export type JobTypeWhereInput = {
  destination?: JsonFilter;
  id?: StringFilter;
  jobs?: JobListRelationFilter;
  name?: StringFilter;
  source?: JsonFilter;
};
