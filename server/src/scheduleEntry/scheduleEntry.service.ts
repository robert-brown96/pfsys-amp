import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ScheduleEntryServiceBase } from "./base/scheduleEntry.service.base";

@Injectable()
export class ScheduleEntryService extends ScheduleEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
