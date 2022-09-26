import { Module } from "@nestjs/common";
import { AccountTypeModuleBase } from "./base/accountType.module.base";
import { AccountTypeService } from "./accountType.service";
import { AccountTypeController } from "./accountType.controller";
import { AccountTypeResolver } from "./accountType.resolver";

@Module({
  imports: [AccountTypeModuleBase],
  controllers: [AccountTypeController],
  providers: [AccountTypeService, AccountTypeResolver],
  exports: [AccountTypeService],
})
export class AccountTypeModule {}
