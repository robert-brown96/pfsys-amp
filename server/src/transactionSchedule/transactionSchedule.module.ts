import { Module } from "@nestjs/common";
import { TransactionScheduleModuleBase } from "./base/transactionSchedule.module.base";
import { TransactionScheduleService } from "./transactionSchedule.service";
import { TransactionScheduleController } from "./transactionSchedule.controller";
import { TransactionScheduleResolver } from "./transactionSchedule.resolver";

@Module({
  imports: [TransactionScheduleModuleBase],
  controllers: [TransactionScheduleController],
  providers: [TransactionScheduleService, TransactionScheduleResolver],
  exports: [TransactionScheduleService],
})
export class TransactionScheduleModule {}
