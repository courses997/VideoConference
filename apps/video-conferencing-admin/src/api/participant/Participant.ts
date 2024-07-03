import { Message } from "../message/Message";
import { User } from "../user/User";

export type Participant = {
  createdAt: Date;
  id: string;
  messages?: Array<Message>;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
