import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TransactionScheduleServiceBase } from "./base/transactionSchedule.service.base";

@Injectable()
export class TransactionScheduleService extends TransactionScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
