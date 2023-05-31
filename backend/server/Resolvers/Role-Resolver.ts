import { Arg, Mutation, Query, Resolver } from 'type-graphql';

import { PrismaClient } from '@prisma/client';
import { RoleResult } from '../Dtos/models/role-models';
import { AddRoleInput, DeleteRoleInput } from '../Dtos/Inputs/role-input';
const prisma = new PrismaClient();

@Resolver()
export class RoleListResolver {
  @Query(() => [RoleResult])
  async getRoles() {
    try {
      let roleResults = await prisma.role.findMany({});

      if (roleResults) {
        return roleResults;
      }
    } catch (error) {
      console.log(error);
    }
  }

  @Mutation(() => Boolean)
  async deleteRole(@Arg('data') data: DeleteRoleInput) {
    const { id } = data;
    try {
      let isRoleDeleted = await prisma.role.delete({
        where: {
          id,
        },
      });

      if (isRoleDeleted) {
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  }
  @Mutation(() => Boolean)
  async AddRole(@Arg('data') data: AddRoleInput) {
    const { name } = data;

    try {
      let isRoleAdded = await prisma.department.create({
        data: {
          name,
        },
      });

      if (isRoleAdded) {
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
