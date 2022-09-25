import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TransactionLineResolverBase } from "./base/transactionLine.resolver.base";
import { TransactionLine } from "./base/TransactionLine";
import { TransactionLineService } from "./transactionLine.service";

@graphql.Resolver(() => TransactionLine)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TransactionLineResolver extends TransactionLineResolverBase {
  constructor(
    protected readonly service: TransactionLineService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
