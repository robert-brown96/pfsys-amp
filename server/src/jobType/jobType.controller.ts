import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { JobTypeService } from "./jobType.service";
import { JobTypeControllerBase } from "./base/jobType.controller.base";

@swagger.ApiTags("jobTypes")
@common.Controller("jobTypes")
export class JobTypeController extends JobTypeControllerBase {
  constructor(
    protected readonly service: JobTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
