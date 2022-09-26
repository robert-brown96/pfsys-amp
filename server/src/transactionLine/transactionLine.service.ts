import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TransactionLineServiceBase } from "./base/transactionLine.service.base";

@Injectable()
export class TransactionLineService extends TransactionLineServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
