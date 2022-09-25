import { BookUpdateManyWithoutUsersInput } from "./BookUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  books?: BookUpdateManyWithoutUsersInput;
  email?: string;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
