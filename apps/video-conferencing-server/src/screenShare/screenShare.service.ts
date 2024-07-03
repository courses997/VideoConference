import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScreenShareServiceBase } from "./base/screenShare.service.base";

@Injectable()
export class ScreenShareService extends ScreenShareServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
