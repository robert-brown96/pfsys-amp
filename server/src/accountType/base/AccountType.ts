/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumAccountTypeAccountCategory } from "./EnumAccountTypeAccountCategory";
import {
  IsEnum,
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
} from "class-validator";
import { Account } from "../../account/base/Account";
import { Type } from "class-transformer";
import { EnumAccountTypeUnit } from "./EnumAccountTypeUnit";
@ObjectType()
class AccountType {
  @ApiProperty({
    required: true,
    enum: EnumAccountTypeAccountCategory,
  })
  @IsEnum(EnumAccountTypeAccountCategory)
  @Field(() => EnumAccountTypeAccountCategory, {
    nullable: true,
  })
  accountCategory?:
    | "Asset"
    | "Liability"
    | "Equity"
    | "Revenue"
    | "Expense"
    | "NonPosting";

  @ApiProperty({
    required: false,
    type: () => [Account],
  })
  @ValidateNested()
  @Type(() => Account)
  @IsOptional()
  accounts?: Array<Account>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: true,
    enum: EnumAccountTypeUnit,
  })
  @IsEnum(EnumAccountTypeUnit)
  @Field(() => EnumAccountTypeUnit, {
    nullable: true,
  })
  unit?: "Currency" | "Stock";

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { AccountType };
