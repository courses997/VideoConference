import { Permissions as TPermissions } from "../api/permissions/Permissions";

export const PERMISSIONS_TITLE_FIELD = "id";

export const PermissionsTitle = (record: TPermissions): string => {
  return record.id?.toString() || String(record.id);
};
