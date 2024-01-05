import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { UsersResolver } from "./src/resolvers/Users.resolver";
import path from "node:path";

const main = async () => {
  const schema = await buildSchema({
    resolvers: [UsersResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: {
      port: 4000,
    },
  });

  console.log(`server listening at ${url}`);
};

main();
