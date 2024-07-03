import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ScreenShareService } from "./screenShare.service";
import { ScreenShareControllerBase } from "./base/screenShare.controller.base";

@swagger.ApiTags("screenShares")
@common.Controller("screenShares")
export class ScreenShareController extends ScreenShareControllerBase {
  constructor(
    protected readonly service: ScreenShareService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
