import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParticipantWhereInput = {
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
