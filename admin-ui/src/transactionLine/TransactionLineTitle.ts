import { TransactionLine as TTransactionLine } from "../api/transactionLine/TransactionLine";

export const TRANSACTIONLINE_TITLE_FIELD = "memo";

export const TransactionLineTitle = (record: TTransactionLine): string => {
  return record.memo || record.id;
};
