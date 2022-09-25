import { Module } from "@nestjs/common";
import { CurrencyModuleBase } from "./base/currency.module.base";
import { CurrencyService } from "./currency.service";
import { CurrencyController } from "./currency.controller";

@Module({
  imports: [CurrencyModuleBase],
  controllers: [CurrencyController],
  providers: [CurrencyService],
  exports: [CurrencyService],
})
export class CurrencyModule {}
