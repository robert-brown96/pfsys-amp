import { Book } from "../book/Book";
import { JsonValue } from "type-fest";

export type User = {
  books?: Array<Book>;
  createdAt: Date;
  email: string;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
