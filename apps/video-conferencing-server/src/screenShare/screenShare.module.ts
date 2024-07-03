import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ScreenShareModuleBase } from "./base/screenShare.module.base";
import { ScreenShareService } from "./screenShare.service";
import { ScreenShareController } from "./screenShare.controller";
import { ScreenShareResolver } from "./screenShare.resolver";

@Module({
  imports: [ScreenShareModuleBase, forwardRef(() => AuthModule)],
  controllers: [ScreenShareController],
  providers: [ScreenShareService, ScreenShareResolver],
  exports: [ScreenShareService],
})
export class ScreenShareModule {}
