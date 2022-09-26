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
import { TransactionService } from "../transaction.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TransactionCreateInput } from "./TransactionCreateInput";
import { TransactionWhereInput } from "./TransactionWhereInput";
import { TransactionWhereUniqueInput } from "./TransactionWhereUniqueInput";
import { TransactionFindManyArgs } from "./TransactionFindManyArgs";
import { TransactionUpdateInput } from "./TransactionUpdateInput";
import { Transaction } from "./Transaction";
import { BookFindManyArgs } from "../../book/base/BookFindManyArgs";
import { Book } from "../../book/base/Book";
import { BookWhereUniqueInput } from "../../book/base/BookWhereUniqueInput";
import { TransactionLineFindManyArgs } from "../../transactionLine/base/TransactionLineFindManyArgs";
import { TransactionLine } from "../../transactionLine/base/TransactionLine";
import { TransactionLineWhereUniqueInput } from "../../transactionLine/base/TransactionLineWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TransactionControllerBase {
  constructor(
    protected readonly service: TransactionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Transaction })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: TransactionCreateInput
  ): Promise<Transaction> {
    return await this.service.create({
      data: {
        ...data,

        createdFromJob: data.createdFromJob
          ? {
              connect: data.createdFromJob,
            }
          : undefined,

        currency: {
          connect: data.currency,
        },
      },
      select: {
        createdAt: true,

        createdFromJob: {
          select: {
            id: true,
          },
        },

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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Transaction] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(TransactionFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Transaction[]> {
    const args = plainToClass(TransactionFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,

        createdFromJob: {
          select: {
            id: true,
          },
        },

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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Transaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: TransactionWhereUniqueInput
  ): Promise<Transaction | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,

        createdFromJob: {
          select: {
            id: true,
          },
        },

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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Transaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: TransactionWhereUniqueInput,
    @common.Body() data: TransactionUpdateInput
  ): Promise<Transaction | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          createdFromJob: data.createdFromJob
            ? {
                connect: data.createdFromJob,
              }
            : undefined,

          currency: {
            connect: data.currency,
          },
        },
        select: {
          createdAt: true,

          createdFromJob: {
            select: {
              id: true,
            },
          },

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
    resource: "Transaction",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Transaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: TransactionWhereUniqueInput
  ): Promise<Transaction | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,

          createdFromJob: {
            select: {
              id: true,
            },
          },

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
  @common.Get("/:id/book")
  @ApiNestedQuery(BookFindManyArgs)
  async findManyBook(
    @common.Req() request: Request,
    @common.Param() params: TransactionWhereUniqueInput
  ): Promise<Book[]> {
    const query = plainToClass(BookFindManyArgs, request.query);
    const results = await this.service.findBook(params.id, {
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
    resource: "Transaction",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/book")
  async connectBook(
    @common.Param() params: TransactionWhereUniqueInput,
    @common.Body() body: BookWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      book: {
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
    resource: "Transaction",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/book")
  async updateBook(
    @common.Param() params: TransactionWhereUniqueInput,
    @common.Body() body: BookWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      book: {
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
    resource: "Transaction",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/book")
  async disconnectBook(
    @common.Param() params: TransactionWhereUniqueInput,
    @common.Body() body: BookWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      book: {
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
    resource: "TransactionLine",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/transactionLines")
  @ApiNestedQuery(TransactionLineFindManyArgs)
  async findManyTransactionLines(
    @common.Req() request: Request,
    @common.Param() params: TransactionWhereUniqueInput
  ): Promise<TransactionLine[]> {
    const query = plainToClass(TransactionLineFindManyArgs, request.query);
    const results = await this.service.findTransactionLines(params.id, {
      ...query,
      select: {
        account: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        credit: true,
        data: true,
        debit: true,

        entity: {
          select: {
            id: true,
          },
        },

        id: true,
        isReconciled: true,
        memo: true,

        transaction: {
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
    resource: "Transaction",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/transactionLines")
  async connectTransactionLines(
    @common.Param() params: TransactionWhereUniqueInput,
    @common.Body() body: TransactionLineWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactionLines: {
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
    resource: "Transaction",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/transactionLines")
  async updateTransactionLines(
    @common.Param() params: TransactionWhereUniqueInput,
    @common.Body() body: TransactionLineWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactionLines: {
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
    resource: "Transaction",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/transactionLines")
  async disconnectTransactionLines(
    @common.Param() params: TransactionWhereUniqueInput,
    @common.Body() body: TransactionLineWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactionLines: {
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
