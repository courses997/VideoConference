import { Participant } from "../participant/Participant";

export type Message = {
  content: string | null;
  createdAt: Date;
  id: string;
  participant?: Participant | null;
  timestamp: Date | null;
  updatedAt: Date;
};
