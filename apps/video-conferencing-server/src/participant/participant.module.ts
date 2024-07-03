import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ParticipantModuleBase } from "./base/participant.module.base";
import { ParticipantService } from "./participant.service";
import { ParticipantController } from "./participant.controller";
import { ParticipantResolver } from "./participant.resolver";

@Module({
  imports: [ParticipantModuleBase, forwardRef(() => AuthModule)],
  controllers: [ParticipantController],
  providers: [ParticipantService, ParticipantResolver],
  exports: [ParticipantService],
})
export class ParticipantModule {}
