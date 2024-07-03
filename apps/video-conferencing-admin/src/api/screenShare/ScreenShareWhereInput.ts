import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ScreenShareWhereInput = {
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
};
