import { SortOrder } from "../../util/SortOrder";

export type PermissionsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  meetingId?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
