import { Participant } from "../participant/Participant";
import { Permissions } from "../permissions/Permissions";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  participants?: Array<Participant>;
  permissionsItems?: Array<Permissions>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
