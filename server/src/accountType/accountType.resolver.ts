import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AccountTypeResolverBase } from "./base/accountType.resolver.base";
import { AccountType } from "./base/AccountType";
import { AccountTypeService } from "./accountType.service";

@graphql.Resolver(() => AccountType)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AccountTypeResolver extends AccountTypeResolverBase {
  constructor(
    protected readonly service: AccountTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
