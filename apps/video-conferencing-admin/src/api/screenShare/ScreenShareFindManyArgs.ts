import { ScreenShareWhereInput } from "./ScreenShareWhereInput";
import { ScreenShareOrderByInput } from "./ScreenShareOrderByInput";

export type ScreenShareFindManyArgs = {
  where?: ScreenShareWhereInput;
  orderBy?: Array<ScreenShareOrderByInput>;
  skip?: number;
  take?: number;
};
