import { Module } from "@nestjs/common";
import { ScheduleEntryModuleBase } from "./base/scheduleEntry.module.base";
import { ScheduleEntryService } from "./scheduleEntry.service";
import { ScheduleEntryController } from "./scheduleEntry.controller";

@Module({
  imports: [ScheduleEntryModuleBase],
  controllers: [ScheduleEntryController],
  providers: [ScheduleEntryService],
  exports: [ScheduleEntryService],
})
export class ScheduleEntryModule {}
