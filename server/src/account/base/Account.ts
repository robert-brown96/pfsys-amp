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
import {
  IsInt,
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsBoolean,
} from "class-validator";
import { AccountType } from "../../accountType/base/AccountType";
import { Type } from "class-transformer";
import { Entity } from "../../entity/base/Entity";
import { ScheduleEntry } from "../../scheduleEntry/base/ScheduleEntry";
import { TransactionLine } from "../../transactionLine/base/TransactionLine";
@ObjectType()
class Account {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  accountNumber!: number;

  @ApiProperty({
    required: true,
    type: () => AccountType,
  })
  @ValidateNested()
  @Type(() => AccountType)
  accountType?: AccountType;

  @ApiProperty({
    required: false,
    type: () => [Account],
  })
  @ValidateNested()
  @Type(() => Account)
  @IsOptional()
  childAccounts?: Array<Account>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [Entity],
  })
  @ValidateNested()
  @Type(() => Entity)
  @IsOptional()
  entities?: Array<Entity>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isExternal!: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isSummary!: boolean | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => Account,
  })
  @ValidateNested()
  @Type(() => Account)
  @IsOptional()
  parent?: Account | null;

  @ApiProperty({
    required: false,
    type: () => [ScheduleEntry],
  })
  @ValidateNested()
  @Type(() => ScheduleEntry)
  @IsOptional()
  scheduleEntries?: Array<ScheduleEntry>;

  @ApiProperty({
    required: false,
    type: () => [TransactionLine],
  })
  @ValidateNested()
  @Type(() => TransactionLine)
  @IsOptional()
  transactionLines?: Array<TransactionLine>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Account };
