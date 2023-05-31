import { Arg, Mutation, Query, Resolver } from 'type-graphql';

import { PrismaClient } from '@prisma/client';
import { BranchResult } from '../Dtos/models/branch-models';
import {
  DeleteBranchInput,
  addUpdateBrancInput,
} from '../Dtos/Inputs/branch-input';
const prisma = new PrismaClient();

@Resolver()
export class BranchListResolver {
  @Query(() => [BranchResult])
  async getBranchs() {
    try {
      let branchResults = await prisma.branch.findMany({});

      if (branchResults) {
        return branchResults;
      }
    } catch (error) {
      console.log(error);
    }
  }

  @Mutation(() => Boolean)
  async deleteBranch(@Arg('data') data: DeleteBranchInput) {
    const { id } = data;
    try {
      let isBranchDeleted = await prisma.branch.delete({
        where: {
          id,
        },
      });

      if (isBranchDeleted) {
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  }

  @Mutation(() => Boolean)
  async addUpdateBranch(@Arg('data') data: addUpdateBrancInput) {
    const { id, ...dataInfo } = data;

    try {
      let isBranchaddedUpdated = await prisma.branch.upsert({
        where: {
          id,
        },
        update: {
          address: dataInfo.address,
          city: dataInfo.city,
          email: dataInfo.email,
          name: dataInfo.name,
          phone: dataInfo.phone,
          state: dataInfo.state,
        },
        create: {
          address: dataInfo.address,
          city: dataInfo.city,
          email: dataInfo.email,
          name: dataInfo.name,
          phone: dataInfo.phone,
          state: dataInfo.state,
        },
      });

      if (isBranchaddedUpdated) {
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
