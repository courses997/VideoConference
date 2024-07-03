import { ParticipantWhereUniqueInput } from "../participant/ParticipantWhereUniqueInput";

export type MessageCreateInput = {
  content?: string | null;
  participant?: ParticipantWhereUniqueInput | null;
  timestamp?: Date | null;
};
