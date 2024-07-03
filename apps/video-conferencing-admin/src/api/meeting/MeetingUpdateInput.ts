import { PermissionsUpdateManyWithoutMeetingsInput } from "./PermissionsUpdateManyWithoutMeetingsInput";

export type MeetingUpdateInput = {
  description?: string | null;
  duration?: number | null;
  permissionsItems?: PermissionsUpdateManyWithoutMeetingsInput;
  scheduledTime?: Date | null;
  title?: string | null;
};
