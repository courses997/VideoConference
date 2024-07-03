/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Permissions } from "./Permissions";
import { PermissionsCountArgs } from "./PermissionsCountArgs";
import { PermissionsFindManyArgs } from "./PermissionsFindManyArgs";
import { PermissionsFindUniqueArgs } from "./PermissionsFindUniqueArgs";
import { CreatePermissionsArgs } from "./CreatePermissionsArgs";
import { UpdatePermissionsArgs } from "./UpdatePermissionsArgs";
import { DeletePermissionsArgs } from "./DeletePermissionsArgs";
import { Meeting } from "../../meeting/base/Meeting";
import { User } from "../../user/base/User";
import { PermissionsService } from "../permissions.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Permissions)
export class PermissionsResolverBase {
  constructor(
    protected readonly service: PermissionsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Permissions",
    action: "read",
    possession: "any",
  })
  async _permissionsItemsMeta(
    @graphql.Args() args: PermissionsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Permissions])
  @nestAccessControl.UseRoles({
    resource: "Permissions",
    action: "read",
    possession: "any",
  })
  async permissionsItems(
    @graphql.Args() args: PermissionsFindManyArgs
  ): Promise<Permissions[]> {
    return this.service.permissionsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Permissions, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Permissions",
    action: "read",
    possession: "own",
  })
  async permissions(
    @graphql.Args() args: PermissionsFindUniqueArgs
  ): Promise<Permissions | null> {
    const result = await this.service.permissions(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Permissions)
  @nestAccessControl.UseRoles({
    resource: "Permissions",
    action: "create",
    possession: "any",
  })
  async createPermissions(
    @graphql.Args() args: CreatePermissionsArgs
  ): Promise<Permissions> {
    return await this.service.createPermissions({
      ...args,
      data: {
        ...args.data,

        meeting: args.data.meeting
          ? {
              connect: args.data.meeting,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Permissions)
  @nestAccessControl.UseRoles({
    resource: "Permissions",
    action: "update",
    possession: "any",
  })
  async updatePermissions(
    @graphql.Args() args: UpdatePermissionsArgs
  ): Promise<Permissions | null> {
    try {
      return await this.service.updatePermissions({
        ...args,
        data: {
          ...args.data,

          meeting: args.data.meeting
            ? {
                connect: args.data.meeting,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Permissions)
  @nestAccessControl.UseRoles({
    resource: "Permissions",
    action: "delete",
    possession: "any",
  })
  async deletePermissions(
    @graphql.Args() args: DeletePermissionsArgs
  ): Promise<Permissions | null> {
    try {
      return await this.service.deletePermissions(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Meeting, {
    nullable: true,
    name: "meeting",
  })
  @nestAccessControl.UseRoles({
    resource: "Meeting",
    action: "read",
    possession: "any",
  })
  async getMeeting(
    @graphql.Parent() parent: Permissions
  ): Promise<Meeting | null> {
    const result = await this.service.getMeeting(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Permissions): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}