import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TransactionScheduleService } from "./transactionSchedule.service";
import { TransactionScheduleControllerBase } from "./base/transactionSchedule.controller.base";

@swagger.ApiTags("transactionSchedules")
@common.Controller("transactionSchedules")
export class TransactionScheduleController extends TransactionScheduleControllerBase {
  constructor(
    protected readonly service: TransactionScheduleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
