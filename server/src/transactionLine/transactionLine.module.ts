import { Module } from "@nestjs/common";
import { TransactionLineModuleBase } from "./base/transactionLine.module.base";
import { TransactionLineService } from "./transactionLine.service";
import { TransactionLineController } from "./transactionLine.controller";

@Module({
  imports: [TransactionLineModuleBase],
  controllers: [TransactionLineController],
  providers: [TransactionLineService],
  exports: [TransactionLineService],
})
export class TransactionLineModule {}
