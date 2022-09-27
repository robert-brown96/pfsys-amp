import { Module } from "@nestjs/common";
import { TransactionScheduleModuleBase } from "./base/transactionSchedule.module.base";
import { TransactionScheduleService } from "./transactionSchedule.service";
import { TransactionScheduleController } from "./transactionSchedule.controller";

@Module({
  imports: [TransactionScheduleModuleBase],
  controllers: [TransactionScheduleController],
  providers: [TransactionScheduleService],
  exports: [TransactionScheduleService],
})
export class TransactionScheduleModule {}
