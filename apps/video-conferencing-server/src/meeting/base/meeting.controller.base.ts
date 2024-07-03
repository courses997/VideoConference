/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MeetingService } from "../meeting.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MeetingCreateInput } from "./MeetingCreateInput";
import { Meeting } from "./Meeting";
import { MeetingFindManyArgs } from "./MeetingFindManyArgs";
import { MeetingWhereUniqueInput } from "./MeetingWhereUniqueInput";
import { MeetingUpdateInput } from "./MeetingUpdateInput";
import { PermissionsFindManyArgs } from "../../permissions/base/PermissionsFindManyArgs";
import { Permissions } from "../../permissions/base/Permissions";
import { PermissionsWhereUniqueInput } from "../../permissions/base/PermissionsWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MeetingControllerBase {
  constructor(
    protected readonly service: MeetingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Meeting })
  @nestAccessControl.UseRoles({
    resource: "Meeting",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createMeeting(
    @common.Body() data: MeetingCreateInput
  ): Promise<Meeting> {
    return await this.service.createMeeting({
      data: data,
      select: {
        createdAt: true,
        description: true,
        duration: true,
        id: true,
        scheduledTime: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Meeting] })
  @ApiNestedQuery(MeetingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Meeting",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async meetings(@common.Req() request: Request): Promise<Meeting[]> {
    const args = plainToClass(MeetingFindManyArgs, request.query);
    return this.service.meetings({
      ...args,
      select: {
        createdAt: true,
        description: true,
        duration: true,
        id: true,
        scheduledTime: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Meeting })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Meeting",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async meeting(
    @common.Param() params: MeetingWhereUniqueInput
  ): Promise<Meeting | null> {
    const result = await this.service.meeting({
      where: params,
      select: {
        createdAt: true,
        description: true,
        duration: true,
        id: true,
        scheduledTime: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Meeting })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Meeting",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateMeeting(
    @common.Param() params: MeetingWhereUniqueInput,
    @common.Body() data: MeetingUpdateInput
  ): Promise<Meeting | null> {
    try {
      return await this.service.updateMeeting({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          duration: true,
          id: true,
          scheduledTime: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Meeting })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Meeting",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMeeting(
    @common.Param() params: MeetingWhereUniqueInput
  ): Promise<Meeting | null> {
    try {
      return await this.service.deleteMeeting({
        where: params,
        select: {
          createdAt: true,
          description: true,
          duration: true,
          id: true,
          scheduledTime: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/permissionsItems")
  @ApiNestedQuery(PermissionsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Permissions",
    action: "read",
    possession: "any",
  })
  async findPermissionsItems(
    @common.Req() request: Request,
    @common.Param() params: MeetingWhereUniqueInput
  ): Promise<Permissions[]> {
    const query = plainToClass(PermissionsFindManyArgs, request.query);
    const results = await this.service.findPermissionsItems(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        meeting: {
          select: {
            id: true,
          },
        },

        role: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/permissionsItems")
  @nestAccessControl.UseRoles({
    resource: "Meeting",
    action: "update",
    possession: "any",
  })
  async connectPermissionsItems(
    @common.Param() params: MeetingWhereUniqueInput,
    @common.Body() body: PermissionsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      permissionsItems: {
        connect: body,
      },
    };
    await this.service.updateMeeting({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/permissionsItems")
  @nestAccessControl.UseRoles({
    resource: "Meeting",
    action: "update",
    possession: "any",
  })
  async updatePermissionsItems(
    @common.Param() params: MeetingWhereUniqueInput,
    @common.Body() body: PermissionsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      permissionsItems: {
        set: body,
      },
    };
    await this.service.updateMeeting({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/permissionsItems")
  @nestAccessControl.UseRoles({
    resource: "Meeting",
    action: "update",
    possession: "any",
  })
  async disconnectPermissionsItems(
    @common.Param() params: MeetingWhereUniqueInput,
    @common.Body() body: PermissionsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      permissionsItems: {
        disconnect: body,
      },
    };
    await this.service.updateMeeting({
      where: params,
      data,
      select: { id: true },
    });
  }
}
