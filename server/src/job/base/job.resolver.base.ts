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
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateJobArgs } from "./CreateJobArgs";
import { UpdateJobArgs } from "./UpdateJobArgs";
import { DeleteJobArgs } from "./DeleteJobArgs";
import { JobFindManyArgs } from "./JobFindManyArgs";
import { JobFindUniqueArgs } from "./JobFindUniqueArgs";
import { Job } from "./Job";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { JobType } from "../../jobType/base/JobType";
import { JobService } from "../job.service";

@graphql.Resolver(() => Job)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class JobResolverBase {
  constructor(
    protected readonly service: JobService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Job",
    action: "read",
    possession: "any",
  })
  async _jobsMeta(
    @graphql.Args() args: JobFindManyArgs
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Job])
  @nestAccessControl.UseRoles({
    resource: "Job",
    action: "read",
    possession: "any",
  })
  async jobs(@graphql.Args() args: JobFindManyArgs): Promise<Job[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Job, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Job",
    action: "read",
    possession: "own",
  })
  async job(@graphql.Args() args: JobFindUniqueArgs): Promise<Job | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Job)
  @nestAccessControl.UseRoles({
    resource: "Job",
    action: "create",
    possession: "any",
  })
  async createJob(@graphql.Args() args: CreateJobArgs): Promise<Job> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        jobType: {
          connect: args.data.jobType,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Job)
  @nestAccessControl.UseRoles({
    resource: "Job",
    action: "update",
    possession: "any",
  })
  async updateJob(@graphql.Args() args: UpdateJobArgs): Promise<Job | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          jobType: {
            connect: args.data.jobType,
          },
        },
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

  @graphql.Mutation(() => Job)
  @nestAccessControl.UseRoles({
    resource: "Job",
    action: "delete",
    possession: "any",
  })
  async deleteJob(@graphql.Args() args: DeleteJobArgs): Promise<Job | null> {
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Transaction])
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "read",
    possession: "any",
  })
  async createdTransactions(
    @graphql.Parent() parent: Job,
    @graphql.Args() args: TransactionFindManyArgs
  ): Promise<Transaction[]> {
    const results = await this.service.findCreatedTransactions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => JobType, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "JobType",
    action: "read",
    possession: "any",
  })
  async jobType(@graphql.Parent() parent: Job): Promise<JobType | null> {
    const result = await this.service.getJobType(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
