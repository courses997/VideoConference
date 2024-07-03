import { Permissions } from "../permissions/Permissions";

export type Meeting = {
  createdAt: Date;
  description: string | null;
  duration: number | null;
  id: string;
  permissionsItems?: Array<Permissions>;
  scheduledTime: Date | null;
  title: string | null;
  updatedAt: Date;
};
