import { ParticipantCreateNestedManyWithoutUsersInput } from "./ParticipantCreateNestedManyWithoutUsersInput";
import { PermissionsCreateNestedManyWithoutUsersInput } from "./PermissionsCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  participants?: ParticipantCreateNestedManyWithoutUsersInput;
  password: string;
  permissionsItems?: PermissionsCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
