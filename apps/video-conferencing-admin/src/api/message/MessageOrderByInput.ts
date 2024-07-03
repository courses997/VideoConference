import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  participantId?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
