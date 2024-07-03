import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ScreenShareResolverBase } from "./base/screenShare.resolver.base";
import { ScreenShare } from "./base/ScreenShare";
import { ScreenShareService } from "./screenShare.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ScreenShare)
export class ScreenShareResolver extends ScreenShareResolverBase {
  constructor(
    protected readonly service: ScreenShareService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
