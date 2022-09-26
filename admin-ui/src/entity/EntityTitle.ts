import { Entity as TEntity } from "../api/entity/Entity";

export const ENTITY_TITLE_FIELD = "name";

export const EntityTitle = (record: TEntity): string => {
  return record.name || record.id;
};
