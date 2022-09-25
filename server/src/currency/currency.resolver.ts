import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CurrencyResolverBase } from "./base/currency.resolver.base";
import { Currency } from "./base/Currency";
import { CurrencyService } from "./currency.service";

@graphql.Resolver(() => Currency)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CurrencyResolver extends CurrencyResolverBase {
  constructor(
    protected readonly service: CurrencyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
