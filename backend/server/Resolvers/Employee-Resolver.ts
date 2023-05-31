import { Arg, Mutation, Query, Resolver } from 'type-graphql';

import { PrismaClient } from '@prisma/client';
import { EmployeeResult } from '../Dtos/models/employee-models';
import {
  UpdateDeleteEmployeeInput,
  CreateUpdateEmployeeInput,
} from '../Dtos/Inputs/employee-input';
const prisma = new PrismaClient();

@Resolver()
export class EmployeeListResolver {
  @Query(() => [EmployeeResult])
  async getEmployees() {
    try {
      let employeeResults = await prisma.employee.findMany({});

      if (employeeResults) {
        return employeeResults;
      }
    } catch (error) {
      console.log(error);
    }
  }

  @Mutation(() => Boolean)
  async addUpdateEmployee(@Arg('data') data: CreateUpdateEmployeeInput) {
    console.log(data);
    const { id, ...dataInfo } = data;

    try {
      let isEmployeeUpdated = await prisma.employee.upsert({
        where: {
          id: id,
        },
        create: {
          address: dataInfo.address,
          birth_date: dataInfo.birth_date,
          branchID: dataInfo.branchID,
          cpf: dataInfo.cpf,
          departmentID: dataInfo.departmentID,
          email: dataInfo.email,
          name: dataInfo.name,
          phone: dataInfo.phone,
          roleID: dataInfo.roleID,
          status: dataInfo.status,
          image: dataInfo.image,
        },

        update: {
          address: dataInfo.address,
          birth_date: dataInfo.birth_date,
          branchID: dataInfo.branchID,
          cpf: dataInfo.cpf,
          departmentID: dataInfo.departmentID,
          email: dataInfo.email,
          name: dataInfo.name,
          phone: dataInfo.phone,
          roleID: dataInfo.roleID,
          status: dataInfo.status,
          image: dataInfo.image,
        },
      });

      if (isEmployeeUpdated) {
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  }

  @Mutation(() => Boolean)
  async deleteEmployee(@Arg('data') data: UpdateDeleteEmployeeInput) {
    const { id } = data;
    try {
      let isEmployeeDeleted = await prisma.employee.delete({
        where: {
          id,
        },
      });

      if (isEmployeeDeleted) {
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
