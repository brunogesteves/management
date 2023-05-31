import { Arg, Mutation, Query, Resolver } from 'type-graphql';

import { PrismaClient } from '@prisma/client';
import { DepartmentResult } from '../Dtos/models/department-models';
import {
  DeleteDepartmentInput,
  addDepartmentInput,
} from '../Dtos/Inputs/department-input';
const prisma = new PrismaClient();

@Resolver()
export class DepartmentListResolver {
  @Query(() => [DepartmentResult])
  async getDepartments() {
    try {
      let departmentResults = await prisma.department.findMany({});

      if (departmentResults) {
        return departmentResults;
      }
    } catch (error) {
      console.log(error);
    }
  }

  @Mutation(() => Boolean)
  async deleteDepartment(@Arg('data') data: DeleteDepartmentInput) {
    const { id } = data;
    console.log('deleteDepartment: ', data.id);

    try {
      let isDepartmentDeleted = await prisma.department.delete({
        where: {
          id: id,
        },
      });

      if (isDepartmentDeleted) {
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  }

  @Mutation(() => Boolean)
  async addDepartment(@Arg('data') data: addDepartmentInput) {
    const { name } = data;
    console.log('addDepartment: ', name);

    try {
      let isDepartmentAdded = await prisma.department.create({
        data: {
          name,
        },
      });

      if (isDepartmentAdded) {
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
