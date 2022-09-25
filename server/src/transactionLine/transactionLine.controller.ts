import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TransactionLineService } from "./transactionLine.service";
import { TransactionLineControllerBase } from "./base/transactionLine.controller.base";

@swagger.ApiTags("transactionLines")
@common.Controller("transactionLines")
export class TransactionLineController extends TransactionLineControllerBase {
  constructor(
    protected readonly service: TransactionLineService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
