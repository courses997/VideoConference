import { ScreenShare as TScreenShare } from "../api/screenShare/ScreenShare";

export const SCREENSHARE_TITLE_FIELD = "id";

export const ScreenShareTitle = (record: TScreenShare): string => {
  return record.id?.toString() || String(record.id);
};
