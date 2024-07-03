import { MeetingWhereUniqueInput } from "../meeting/MeetingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PermissionsUpdateInput = {
  meeting?: MeetingWhereUniqueInput | null;
  role?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
