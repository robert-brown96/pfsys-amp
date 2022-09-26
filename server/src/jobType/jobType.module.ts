import { Module } from "@nestjs/common";
import { JobTypeModuleBase } from "./base/jobType.module.base";
import { JobTypeService } from "./jobType.service";
import { JobTypeController } from "./jobType.controller";
import { JobTypeResolver } from "./jobType.resolver";

@Module({
  imports: [JobTypeModuleBase],
  controllers: [JobTypeController],
  providers: [JobTypeService, JobTypeResolver],
  exports: [JobTypeService],
})
export class JobTypeModule {}
