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
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { JobTypeWhereUniqueInput } from "../../jobType/base/JobTypeWhereUniqueInput";
import { EnumJobStatus } from "./EnumJobStatus";
@InputType()
class JobWhereInput {
  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  completedOn?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => JobTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JobTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => JobTypeWhereUniqueInput, {
    nullable: true,
  })
  jobType?: JobTypeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  lastRetry?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumJobStatus,
  })
  @IsEnum(EnumJobStatus)
  @IsOptional()
  @Field(() => EnumJobStatus, {
    nullable: true,
  })
  status?:
    | "NotStarted"
    | "Processing"
    | "Complete"
    | "ProcessingFailed"
    | "GetData"
    | "GetFailed"
    | "PendingProcessing";
}
export { JobWhereInput };
