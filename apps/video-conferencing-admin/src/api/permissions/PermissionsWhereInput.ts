import { StringFilter } from "../../util/StringFilter";
import { MeetingWhereUniqueInput } from "../meeting/MeetingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PermissionsWhereInput = {
  id?: StringFilter;
  meeting?: MeetingWhereUniqueInput;
  role?: "Option1";
  user?: UserWhereUniqueInput;
};
