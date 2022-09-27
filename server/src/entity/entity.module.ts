import { Module } from "@nestjs/common";
import { EntityModuleBase } from "./base/entity.module.base";
import { EntityService } from "./entity.service";
import { EntityController } from "./entity.controller";

@Module({
  imports: [EntityModuleBase],
  controllers: [EntityController],
  providers: [EntityService],
  exports: [EntityService],
})
export class EntityModule {}
