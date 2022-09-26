import { Module } from "@nestjs/common";
import { TransactionLineModuleBase } from "./base/transactionLine.module.base";
import { TransactionLineService } from "./transactionLine.service";
import { TransactionLineController } from "./transactionLine.controller";
import { TransactionLineResolver } from "./transactionLine.resolver";

@Module({
  imports: [TransactionLineModuleBase],
  controllers: [TransactionLineController],
  providers: [TransactionLineService, TransactionLineResolver],
  exports: [TransactionLineService],
})
export class TransactionLineModule {}
