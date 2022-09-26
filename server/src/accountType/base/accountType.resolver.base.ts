/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Public } from "../../decorators/public.decorator";
import { CreateAccountTypeArgs } from "./CreateAccountTypeArgs";
import { UpdateAccountTypeArgs } from "./UpdateAccountTypeArgs";
import { DeleteAccountTypeArgs } from "./DeleteAccountTypeArgs";
import { AccountTypeFindManyArgs } from "./AccountTypeFindManyArgs";
import { AccountTypeFindUniqueArgs } from "./AccountTypeFindUniqueArgs";
import { AccountType } from "./AccountType";
import { AccountFindManyArgs } from "../../account/base/AccountFindManyArgs";
import { Account } from "../../account/base/Account";
import { AccountTypeService } from "../accountType.service";

@graphql.Resolver(() => AccountType)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AccountTypeResolverBase {
  constructor(
    protected readonly service: AccountTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _accountTypesMeta(
    @graphql.Args() args: AccountTypeFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @Public()
  @graphql.Query(() => [AccountType])
  async accountTypes(
    @graphql.Args() args: AccountTypeFindManyArgs
  ): Promise<AccountType[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => AccountType, { nullable: true })
  async accountType(
    @graphql.Args() args: AccountTypeFindUniqueArgs
  ): Promise<AccountType | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.Mutation(() => AccountType)
  async createAccountType(
    @graphql.Args() args: CreateAccountTypeArgs
  ): Promise<AccountType> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @Public()
  @graphql.Mutation(() => AccountType)
  async updateAccountType(
    @graphql.Args() args: UpdateAccountTypeArgs
  ): Promise<AccountType | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @graphql.Mutation(() => AccountType)
  async deleteAccountType(
    @graphql.Args() args: DeleteAccountTypeArgs
  ): Promise<AccountType | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @graphql.ResolveField(() => [Account])
  async accounts(
    @graphql.Parent() parent: AccountType,
    @graphql.Args() args: AccountFindManyArgs
  ): Promise<Account[]> {
    const results = await this.service.findAccounts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
