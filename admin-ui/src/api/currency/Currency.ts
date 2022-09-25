import { Book } from "../book/Book";

export type Currency = {
  books?: Array<Book>;
  code: string;
  createdAt: Date;
  id: string;
  isPrimary: boolean | null;
  name: string;
  updatedAt: Date;
};
