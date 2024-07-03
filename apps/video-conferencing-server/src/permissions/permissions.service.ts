import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PermissionsServiceBase } from "./base/permissions.service.base";

@Injectable()
export class PermissionsService extends PermissionsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
