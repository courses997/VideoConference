import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PermissionsListRelationFilter } from "../permissions/PermissionsListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MeetingWhereInput = {
  description?: StringNullableFilter;
  duration?: IntNullableFilter;
  id?: StringFilter;
  permissionsItems?: PermissionsListRelationFilter;
  scheduledTime?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
