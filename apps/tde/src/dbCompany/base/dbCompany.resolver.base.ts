/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { DbCompany } from "./DbCompany";
import { DbCompanyCountArgs } from "./DbCompanyCountArgs";
import { DbCompanyFindManyArgs } from "./DbCompanyFindManyArgs";
import { DbCompanyFindUniqueArgs } from "./DbCompanyFindUniqueArgs";
import { CreateDbCompanyArgs } from "./CreateDbCompanyArgs";
import { UpdateDbCompanyArgs } from "./UpdateDbCompanyArgs";
import { DeleteDbCompanyArgs } from "./DeleteDbCompanyArgs";
import { DbEmployeeFindManyArgs } from "../../dbEmployee/base/DbEmployeeFindManyArgs";
import { DbEmployee } from "../../dbEmployee/base/DbEmployee";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { DbCompanyService } from "../dbCompany.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DbCompany)
export class DbCompanyResolverBase {
  constructor(
    protected readonly service: DbCompanyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DbCompany",
    action: "read",
    possession: "any",
  })
  async _dbCompaniesMeta(
    @graphql.Args() args: DbCompanyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DbCompany])
  @nestAccessControl.UseRoles({
    resource: "DbCompany",
    action: "read",
    possession: "any",
  })
  async dbCompanies(
    @graphql.Args() args: DbCompanyFindManyArgs
  ): Promise<DbCompany[]> {
    return this.service.dbCompanies(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DbCompany, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DbCompany",
    action: "read",
    possession: "own",
  })
  async dbCompany(
    @graphql.Args() args: DbCompanyFindUniqueArgs
  ): Promise<DbCompany | null> {
    const result = await this.service.dbCompany(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DbCompany)
  @nestAccessControl.UseRoles({
    resource: "DbCompany",
    action: "create",
    possession: "any",
  })
  async createDbCompany(
    @graphql.Args() args: CreateDbCompanyArgs
  ): Promise<DbCompany> {
    return await this.service.createDbCompany({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DbCompany)
  @nestAccessControl.UseRoles({
    resource: "DbCompany",
    action: "update",
    possession: "any",
  })
  async updateDbCompany(
    @graphql.Args() args: UpdateDbCompanyArgs
  ): Promise<DbCompany | null> {
    try {
      return await this.service.updateDbCompany({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => DbCompany)
  @nestAccessControl.UseRoles({
    resource: "DbCompany",
    action: "delete",
    possession: "any",
  })
  async deleteDbCompany(
    @graphql.Args() args: DeleteDbCompanyArgs
  ): Promise<DbCompany | null> {
    try {
      return await this.service.deleteDbCompany(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [DbEmployee], { name: "dbEmployees" })
  @nestAccessControl.UseRoles({
    resource: "DbEmployee",
    action: "read",
    possession: "any",
  })
  async findDbEmployees(
    @graphql.Parent() parent: DbCompany,
    @graphql.Args() args: DbEmployeeFindManyArgs
  ): Promise<DbEmployee[]> {
    const results = await this.service.findDbEmployees(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [User], { name: "users" })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findUsers(
    @graphql.Parent() parent: DbCompany,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findUsers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
