import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ScheduleEntryResolverBase } from "./base/scheduleEntry.resolver.base";
import { ScheduleEntry } from "./base/ScheduleEntry";
import { ScheduleEntryService } from "./scheduleEntry.service";

@graphql.Resolver(() => ScheduleEntry)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ScheduleEntryResolver extends ScheduleEntryResolverBase {
  constructor(
    protected readonly service: ScheduleEntryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
