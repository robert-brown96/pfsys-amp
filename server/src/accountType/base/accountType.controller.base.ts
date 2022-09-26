/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AccountTypeService } from "../accountType.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AccountTypeCreateInput } from "./AccountTypeCreateInput";
import { AccountTypeWhereInput } from "./AccountTypeWhereInput";
import { AccountTypeWhereUniqueInput } from "./AccountTypeWhereUniqueInput";
import { AccountTypeFindManyArgs } from "./AccountTypeFindManyArgs";
import { AccountTypeUpdateInput } from "./AccountTypeUpdateInput";
import { AccountType } from "./AccountType";
import { AccountFindManyArgs } from "../../account/base/AccountFindManyArgs";
import { Account } from "../../account/base/Account";
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AccountTypeControllerBase {
  constructor(
    protected readonly service: AccountTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "AccountType",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AccountType })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: AccountTypeCreateInput
  ): Promise<AccountType> {
    return await this.service.create({
      data: data,
      select: {
        accountCategory: true,
        createdAt: true,
        id: true,
        name: true,
        unit: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "AccountType",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [AccountType] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(AccountTypeFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<AccountType[]> {
    const args = plainToClass(AccountTypeFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        accountCategory: true,
        createdAt: true,
        id: true,
        name: true,
        unit: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "AccountType",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AccountType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: AccountTypeWhereUniqueInput
  ): Promise<AccountType | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        accountCategory: true,
        createdAt: true,
        id: true,
        name: true,
        unit: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "AccountType",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: AccountType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: AccountTypeWhereUniqueInput,
    @common.Body() data: AccountTypeUpdateInput
  ): Promise<AccountType | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          accountCategory: true,
          createdAt: true,
          id: true,
          name: true,
          unit: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "AccountType",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: AccountType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: AccountTypeWhereUniqueInput
  ): Promise<AccountType | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          accountCategory: true,
          createdAt: true,
          id: true,
          name: true,
          unit: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/accounts")
  @ApiNestedQuery(AccountFindManyArgs)
  async findManyAccounts(
    @common.Req() request: Request,
    @common.Param() params: AccountTypeWhereUniqueInput
  ): Promise<Account[]> {
    const query = plainToClass(AccountFindManyArgs, request.query);
    const results = await this.service.findAccounts(params.id, {
      ...query,
      select: {
        accountNumber: true,

        accountType: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        isExternal: true,
        isSummary: true,
        name: true,

        parent: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "AccountType",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/accounts")
  async connectAccounts(
    @common.Param() params: AccountTypeWhereUniqueInput,
    @common.Body() body: AccountWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accounts: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "AccountType",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/accounts")
  async updateAccounts(
    @common.Param() params: AccountTypeWhereUniqueInput,
    @common.Body() body: AccountWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accounts: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "AccountType",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/accounts")
  async disconnectAccounts(
    @common.Param() params: AccountTypeWhereUniqueInput,
    @common.Body() body: AccountWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accounts: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
