/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsOptional,
  IsJSON,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { GraphQLJSONObject } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { JobTypeWhereUniqueInput } from "../../jobType/base/JobTypeWhereUniqueInput";
import { EnumJobStatus } from "./EnumJobStatus";
@InputType()
class JobCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  completedOn?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  dataIn?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  dataOut?: InputJsonValue;

  @ApiProperty({
    required: true,
    type: () => JobTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JobTypeWhereUniqueInput)
  @Field(() => JobTypeWhereUniqueInput)
  jobType!: JobTypeWhereUniqueInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  lastRetry?: Date | null;

  @ApiProperty({
    required: true,
    enum: EnumJobStatus,
  })
  @IsEnum(EnumJobStatus)
  @Field(() => EnumJobStatus)
  status!:
    | "NotStarted"
    | "Processing"
    | "Complete"
    | "ProcessingFailed"
    | "GetData"
    | "GetFailed"
    | "PendingProcessing";
}
export { JobCreateInput };
