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
import { CurrencyService } from "../currency.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Public } from "../../decorators/public.decorator";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CurrencyCreateInput } from "./CurrencyCreateInput";
import { CurrencyWhereInput } from "./CurrencyWhereInput";
import { CurrencyWhereUniqueInput } from "./CurrencyWhereUniqueInput";
import { CurrencyFindManyArgs } from "./CurrencyFindManyArgs";
import { CurrencyUpdateInput } from "./CurrencyUpdateInput";
import { Currency } from "./Currency";
import { BookFindManyArgs } from "../../book/base/BookFindManyArgs";
import { Book } from "../../book/base/Book";
import { BookWhereUniqueInput } from "../../book/base/BookWhereUniqueInput";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { TransactionWhereUniqueInput } from "../../transaction/base/TransactionWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CurrencyControllerBase {
  constructor(
    protected readonly service: CurrencyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Currency })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: CurrencyCreateInput): Promise<Currency> {
    return await this.service.create({
      data: data,
      select: {
        code: true,
        createdAt: true,
        id: true,
        isPrimary: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @Public()
  @common.Get()
  @swagger.ApiOkResponse({ type: [Currency] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(CurrencyFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Currency[]> {
    const args = plainToClass(CurrencyFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        code: true,
        createdAt: true,
        id: true,
        isPrimary: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Currency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: CurrencyWhereUniqueInput
  ): Promise<Currency | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        code: true,
        createdAt: true,
        id: true,
        isPrimary: true,
        name: true,
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
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Currency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() data: CurrencyUpdateInput
  ): Promise<Currency | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          code: true,
          createdAt: true,
          id: true,
          isPrimary: true,
          name: true,
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
    resource: "Currency",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Currency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: CurrencyWhereUniqueInput
  ): Promise<Currency | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          code: true,
          createdAt: true,
          id: true,
          isPrimary: true,
          name: true,
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
    resource: "Book",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/books")
  @ApiNestedQuery(BookFindManyArgs)
  async findManyBooks(
    @common.Req() request: Request,
    @common.Param() params: CurrencyWhereUniqueInput
  ): Promise<Book[]> {
    const query = plainToClass(BookFindManyArgs, request.query);
    const results = await this.service.findBooks(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        isPrimary: true,
        name: true,

        owner: {
          select: {
            id: true,
          },
        },

        primaryCurrency: {
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
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/books")
  async connectBooks(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: BookWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      books: {
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
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/books")
  async updateBooks(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: BookWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      books: {
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
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/books")
  async disconnectBooks(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: BookWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      books: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/transactions")
  @ApiNestedQuery(TransactionFindManyArgs)
  async findManyTransactions(
    @common.Req() request: Request,
    @common.Param() params: CurrencyWhereUniqueInput
  ): Promise<Transaction[]> {
    const query = plainToClass(TransactionFindManyArgs, request.query);
    const results = await this.service.findTransactions(params.id, {
      ...query,
      select: {
        createdAt: true,

        currency: {
          select: {
            id: true,
          },
        },

        id: true,
        trandate: true,
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
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/transactions")
  async connectTransactions(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
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
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/transactions")
  async updateTransactions(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
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
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/transactions")
  async disconnectTransactions(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
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
