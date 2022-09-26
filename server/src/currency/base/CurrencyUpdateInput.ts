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
import { BookUpdateManyWithoutCurrenciesInput } from "./BookUpdateManyWithoutCurrenciesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { TransactionUpdateManyWithoutCurrenciesInput } from "./TransactionUpdateManyWithoutCurrenciesInput";
@InputType()
class CurrencyUpdateInput {
  @ApiProperty({
    required: false,
    type: () => BookUpdateManyWithoutCurrenciesInput,
  })
  @ValidateNested()
  @Type(() => BookUpdateManyWithoutCurrenciesInput)
  @IsOptional()
  @Field(() => BookUpdateManyWithoutCurrenciesInput, {
    nullable: true,
  })
  books?: BookUpdateManyWithoutCurrenciesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  code?: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isPrimary?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: () => TransactionUpdateManyWithoutCurrenciesInput,
  })
  @ValidateNested()
  @Type(() => TransactionUpdateManyWithoutCurrenciesInput)
  @IsOptional()
  @Field(() => TransactionUpdateManyWithoutCurrenciesInput, {
    nullable: true,
  })
  transactions?: TransactionUpdateManyWithoutCurrenciesInput;
}
export { CurrencyUpdateInput };
