import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ScheduleEntryService } from "./scheduleEntry.service";
import { ScheduleEntryControllerBase } from "./base/scheduleEntry.controller.base";

@swagger.ApiTags("scheduleEntries")
@common.Controller("scheduleEntries")
export class ScheduleEntryController extends ScheduleEntryControllerBase {
  constructor(
    protected readonly service: ScheduleEntryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
