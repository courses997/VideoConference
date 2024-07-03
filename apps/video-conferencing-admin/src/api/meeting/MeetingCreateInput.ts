import { PermissionsCreateNestedManyWithoutMeetingsInput } from "./PermissionsCreateNestedManyWithoutMeetingsInput";

export type MeetingCreateInput = {
  description?: string | null;
  duration?: number | null;
  permissionsItems?: PermissionsCreateNestedManyWithoutMeetingsInput;
  scheduledTime?: Date | null;
  title?: string | null;
};
