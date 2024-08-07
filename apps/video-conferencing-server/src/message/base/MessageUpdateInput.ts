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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsDate,
} from "class-validator";
import { ParticipantWhereUniqueInput } from "../../participant/base/ParticipantWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class MessageUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    type: () => ParticipantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ParticipantWhereUniqueInput)
  @IsOptional()
  @Field(() => ParticipantWhereUniqueInput, {
    nullable: true,
  })
  participant?: ParticipantWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  timestamp?: Date | null;
}

export { MessageUpdateInput as MessageUpdateInput };
