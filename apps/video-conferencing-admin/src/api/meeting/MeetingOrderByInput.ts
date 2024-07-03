import { SortOrder } from "../../util/SortOrder";

export type MeetingOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  scheduledTime?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
