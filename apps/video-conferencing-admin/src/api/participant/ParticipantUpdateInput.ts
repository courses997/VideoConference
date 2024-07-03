import { MessageUpdateManyWithoutParticipantsInput } from "./MessageUpdateManyWithoutParticipantsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParticipantUpdateInput = {
  messages?: MessageUpdateManyWithoutParticipantsInput;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
