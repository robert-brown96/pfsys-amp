/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ScheduleEntryWhereUniqueInput } from "../../scheduleEntry/base/ScheduleEntryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class ScheduleEntryUpdateManyWithoutTransactionSchedulesInput {
  @Field(() => [ScheduleEntryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ScheduleEntryWhereUniqueInput],
  })
  connect?: Array<ScheduleEntryWhereUniqueInput>;

  @Field(() => [ScheduleEntryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ScheduleEntryWhereUniqueInput],
  })
  disconnect?: Array<ScheduleEntryWhereUniqueInput>;

  @Field(() => [ScheduleEntryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ScheduleEntryWhereUniqueInput],
  })
  set?: Array<ScheduleEntryWhereUniqueInput>;
}
export { ScheduleEntryUpdateManyWithoutTransactionSchedulesInput };
