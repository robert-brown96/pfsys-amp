import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { JobTypeServiceBase } from "./base/jobType.service.base";

@Injectable()
export class JobTypeService extends JobTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
