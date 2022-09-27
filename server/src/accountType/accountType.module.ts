import { Module } from "@nestjs/common";
import { AccountTypeModuleBase } from "./base/accountType.module.base";
import { AccountTypeService } from "./accountType.service";
import { AccountTypeController } from "./accountType.controller";

@Module({
  imports: [AccountTypeModuleBase],
  controllers: [AccountTypeController],
  providers: [AccountTypeService],
  exports: [AccountTypeService],
})
export class AccountTypeModule {}
