import { ParticipantUpdateManyWithoutUsersInput } from "./ParticipantUpdateManyWithoutUsersInput";
import { PermissionsUpdateManyWithoutUsersInput } from "./PermissionsUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  participants?: ParticipantUpdateManyWithoutUsersInput;
  password?: string;
  permissionsItems?: PermissionsUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
