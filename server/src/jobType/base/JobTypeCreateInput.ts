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
import { IsJSON, ValidateNested, IsOptional, IsString } from "class-validator";
import { GraphQLJSONObject } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { JobCreateNestedManyWithoutJobTypesInput } from "./JobCreateNestedManyWithoutJobTypesInput";
import { Type } from "class-transformer";
@InputType()
class JobTypeCreateInput {
  @ApiProperty({
    required: true,
  })
  @IsJSON()
  @Field(() => GraphQLJSONObject)
  destination!: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => JobCreateNestedManyWithoutJobTypesInput,
  })
  @ValidateNested()
  @Type(() => JobCreateNestedManyWithoutJobTypesInput)
  @IsOptional()
  @Field(() => JobCreateNestedManyWithoutJobTypesInput, {
    nullable: true,
  })
  jobs?: JobCreateNestedManyWithoutJobTypesInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSON()
  @Field(() => GraphQLJSONObject)
  source!: InputJsonValue;
}
export { JobTypeCreateInput };
