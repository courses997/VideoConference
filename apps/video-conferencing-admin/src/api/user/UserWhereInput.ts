import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ParticipantListRelationFilter } from "../participant/ParticipantListRelationFilter";
import { PermissionsListRelationFilter } from "../permissions/PermissionsListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  participants?: ParticipantListRelationFilter;
  permissionsItems?: PermissionsListRelationFilter;
  username?: StringFilter;
};
