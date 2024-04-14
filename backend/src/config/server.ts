import * as dotenv from "dotenv";
import { ApolloServer } from "apollo-server";
import { UserResolver } from "../resolvers/user.resolver";
import { dataSource } from "./db";
import { buildSchema } from "type-graphql";

const createServer = async (): Promise<ApolloServer> => {
  dotenv.config();
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [UserResolver],
    validate: { forbidUnknownValues: false },
  });

  return new ApolloServer({ schema });
};

export default createServer;
