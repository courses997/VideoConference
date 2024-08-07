/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PermissionsWhereInput } from "./PermissionsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PermissionsOrderByInput } from "./PermissionsOrderByInput";

@ArgsType()
class PermissionsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PermissionsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PermissionsWhereInput, { nullable: true })
  @Type(() => PermissionsWhereInput)
  where?: PermissionsWhereInput;

  @ApiProperty({
    required: false,
    type: [PermissionsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PermissionsOrderByInput], { nullable: true })
  @Type(() => PermissionsOrderByInput)
  orderBy?: Array<PermissionsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PermissionsFindManyArgs as PermissionsFindManyArgs };
