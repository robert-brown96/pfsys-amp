import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TransactionScheduleResolverBase } from "./base/transactionSchedule.resolver.base";
import { TransactionSchedule } from "./base/TransactionSchedule";
import { TransactionScheduleService } from "./transactionSchedule.service";

@graphql.Resolver(() => TransactionSchedule)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TransactionScheduleResolver extends TransactionScheduleResolverBase {
  constructor(
    protected readonly service: TransactionScheduleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
