import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PermissionsModuleBase } from "./base/permissions.module.base";
import { PermissionsService } from "./permissions.service";
import { PermissionsController } from "./permissions.controller";
import { PermissionsResolver } from "./permissions.resolver";

@Module({
  imports: [PermissionsModuleBase, forwardRef(() => AuthModule)],
  controllers: [PermissionsController],
  providers: [PermissionsService, PermissionsResolver],
  exports: [PermissionsService],
})
export class PermissionsModule {}
