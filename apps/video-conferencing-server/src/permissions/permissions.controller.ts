import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PermissionsService } from "./permissions.service";
import { PermissionsControllerBase } from "./base/permissions.controller.base";

@swagger.ApiTags("permissions")
@common.Controller("permissions")
export class PermissionsController extends PermissionsControllerBase {
  constructor(
    protected readonly service: PermissionsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
