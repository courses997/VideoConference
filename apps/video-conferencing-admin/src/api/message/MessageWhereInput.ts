import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ParticipantWhereUniqueInput } from "../participant/ParticipantWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MessageWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  participant?: ParticipantWhereUniqueInput;
  timestamp?: DateTimeNullableFilter;
};
