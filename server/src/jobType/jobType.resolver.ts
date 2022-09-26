import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { JobTypeResolverBase } from "./base/jobType.resolver.base";
import { JobType } from "./base/JobType";
import { JobTypeService } from "./jobType.service";

@graphql.Resolver(() => JobType)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class JobTypeResolver extends JobTypeResolverBase {
  constructor(
    protected readonly service: JobTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
