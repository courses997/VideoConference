import { ParticipantWhereUniqueInput } from "../participant/ParticipantWhereUniqueInput";

export type MessageUpdateInput = {
  content?: string | null;
  participant?: ParticipantWhereUniqueInput | null;
  timestamp?: Date | null;
};
