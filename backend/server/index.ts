import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { EmployeeListResolver } from './Resolvers/Employee-Resolver';
import { BranchListResolver } from './Resolvers/Branch-Resolver';
import { DepartmentListResolver } from './Resolvers/Department-Resolver';
import { RoleListResolver } from './Resolvers/Role-Resolver';

const main = async () => {
  const typeDefs = `
  scalar Upload
  `;
  const schema = await buildSchema({
    resolvers: [
      EmployeeListResolver,
      BranchListResolver,
      DepartmentListResolver,
      RoleListResolver,
    ],
  });

  const apolloServer = new ApolloServer({ schema, cache: 'bounded', typeDefs });
  const app = express();

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.listen(4000, () => {
    console.log(`🚀 Server ready at port 4000`);
  });
};
main();
