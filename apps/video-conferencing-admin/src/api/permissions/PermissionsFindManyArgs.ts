import { PermissionsWhereInput } from "./PermissionsWhereInput";
import { PermissionsOrderByInput } from "./PermissionsOrderByInput";

export type PermissionsFindManyArgs = {
  where?: PermissionsWhereInput;
  orderBy?: Array<PermissionsOrderByInput>;
  skip?: number;
  take?: number;
};
