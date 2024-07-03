import { MessageCreateNestedManyWithoutParticipantsInput } from "./MessageCreateNestedManyWithoutParticipantsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParticipantCreateInput = {
  messages?: MessageCreateNestedManyWithoutParticipantsInput;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
