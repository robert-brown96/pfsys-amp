import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { AccountTypeServiceBase } from "./base/accountType.service.base";

@Injectable()
export class AccountTypeService extends AccountTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
