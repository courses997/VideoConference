/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MeetingWhereUniqueInput } from "../../meeting/base/MeetingWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumPermissionsRole } from "./EnumPermissionsRole";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class PermissionsUpdateInput {
  @ApiProperty({
    required: false,
    type: () => MeetingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MeetingWhereUniqueInput)
  @IsOptional()
  @Field(() => MeetingWhereUniqueInput, {
    nullable: true,
  })
  meeting?: MeetingWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumPermissionsRole,
  })
  @IsEnum(EnumPermissionsRole)
  @IsOptional()
  @Field(() => EnumPermissionsRole, {
    nullable: true,
  })
  role?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { PermissionsUpdateInput as PermissionsUpdateInput };