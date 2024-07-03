import { Meeting } from "../meeting/Meeting";
import { User } from "../user/User";

export type Permissions = {
  createdAt: Date;
  id: string;
  meeting?: Meeting | null;
  role?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
