import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import http from "http";
// import { makeExecutableSchema } from "@graphql-tools/schema";
import { graphqlUploadExpress } from "graphql-upload";

// import { typeDefs as rootTypeDefs } from "./typeDefs/root.js";
// import { typeDefs as authorTypeDefs } from "./typeDefs/author.js";
// import { typeDefs as fileUploadTypeDefs } from "./typeDefs/fileUpload.js";
// import { postResolver } from "./resolvers/post.js";
// import { authorResolver } from "./resolvers/author.js";
// import { fileUploadResolver } from "./resolvers/fileUpload.js";

// export const schema = makeExecutableSchema({
//   typeDefs: [rootTypeDefs, authorTypeDefs, fileUploadTypeDefs],
//   resolvers: [postResolver, authorResolver, fileUploadResolver],
// });
import { schema } from "typeDefs/index.js";

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    schema: schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  app.use(graphqlUploadExpress());

  await server.start();
  server.applyMiddleware({
    app,
    path: "/",
  });

  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer();
