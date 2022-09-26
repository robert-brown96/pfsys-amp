import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AccountTypeService } from "./accountType.service";
import { AccountTypeControllerBase } from "./base/accountType.controller.base";

@swagger.ApiTags("accountTypes")
@common.Controller("accountTypes")
export class AccountTypeController extends AccountTypeControllerBase {
  constructor(
    protected readonly service: AccountTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
