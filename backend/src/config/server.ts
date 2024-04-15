import * as dotenv from "dotenv";
import { ApolloServer } from "apollo-server";
import { countryResolver } from "../resolvers/country.resolver";
import { dataSource } from "./db";
import { buildSchema } from "type-graphql";

const createServer = async (): Promise<ApolloServer> => {
  dotenv.config();
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [countryResolver],
    validate: { forbidUnknownValues: false },
  });

  return new ApolloServer({ schema });
};

export default createServer;
