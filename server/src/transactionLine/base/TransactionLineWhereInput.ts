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
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ScheduleEntryListRelationFilter } from "../../scheduleEntry/base/ScheduleEntryListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { EntityWhereUniqueInput } from "../../entity/base/EntityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TransactionWhereUniqueInput } from "../../transaction/base/TransactionWhereUniqueInput";
@InputType()
class TransactionLineWhereInput {
  @ApiProperty({
    required: false,
    type: () => AccountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccountWhereUniqueInput)
  @IsOptional()
  @Field(() => AccountWhereUniqueInput, {
    nullable: true,
  })
  account?: AccountWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ScheduleEntryListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ScheduleEntryListRelationFilter)
  @IsOptional()
  @Field(() => ScheduleEntryListRelationFilter, {
    nullable: true,
  })
  createdFromSchedule?: ScheduleEntryListRelationFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  credit?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  data?: JsonFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  debit?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: () => EntityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EntityWhereUniqueInput)
  @IsOptional()
  @Field(() => EntityWhereUniqueInput, {
    nullable: true,
  })
  entity?: EntityWhereUniqueInput;

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
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  isReconciled?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  memo?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => TransactionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TransactionWhereUniqueInput)
  @IsOptional()
  @Field(() => TransactionWhereUniqueInput, {
    nullable: true,
  })
  transaction?: TransactionWhereUniqueInput;
}
export { TransactionLineWhereInput };
