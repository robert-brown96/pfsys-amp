import { Module } from "@nestjs/common";
import { ScheduleEntryModuleBase } from "./base/scheduleEntry.module.base";
import { ScheduleEntryService } from "./scheduleEntry.service";
import { ScheduleEntryController } from "./scheduleEntry.controller";
import { ScheduleEntryResolver } from "./scheduleEntry.resolver";

@Module({
  imports: [ScheduleEntryModuleBase],
  controllers: [ScheduleEntryController],
  providers: [ScheduleEntryService, ScheduleEntryResolver],
  exports: [ScheduleEntryService],
})
export class ScheduleEntryModule {}
