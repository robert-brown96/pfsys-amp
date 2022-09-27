import { Module } from "@nestjs/common";
import { JobTypeModuleBase } from "./base/jobType.module.base";
import { JobTypeService } from "./jobType.service";
import { JobTypeController } from "./jobType.controller";

@Module({
  imports: [JobTypeModuleBase],
  controllers: [JobTypeController],
  providers: [JobTypeService],
  exports: [JobTypeService],
})
export class JobTypeModule {}
