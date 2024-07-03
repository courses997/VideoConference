/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ScreenShare as PrismaScreenShare } from "@prisma/client";

export class ScreenShareServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ScreenShareCountArgs, "select">
  ): Promise<number> {
    return this.prisma.screenShare.count(args);
  }

  async screenShares(
    args: Prisma.ScreenShareFindManyArgs
  ): Promise<PrismaScreenShare[]> {
    return this.prisma.screenShare.findMany(args);
  }
  async screenShare(
    args: Prisma.ScreenShareFindUniqueArgs
  ): Promise<PrismaScreenShare | null> {
    return this.prisma.screenShare.findUnique(args);
  }
  async createScreenShare(
    args: Prisma.ScreenShareCreateArgs
  ): Promise<PrismaScreenShare> {
    return this.prisma.screenShare.create(args);
  }
  async updateScreenShare(
    args: Prisma.ScreenShareUpdateArgs
  ): Promise<PrismaScreenShare> {
    return this.prisma.screenShare.update(args);
  }
  async deleteScreenShare(
    args: Prisma.ScreenShareDeleteArgs
  ): Promise<PrismaScreenShare> {
    return this.prisma.screenShare.delete(args);
  }
}
