import { makeExecutableSchema } from "@graphql-tools/schema";
import { GraphQLDateTime } from "graphql-iso-date";

import { typeDefs as categoryTypeDefs } from "typeDefs/category";
import { typeDefs as subCategoryTypeDefs } from "typeDefs/subCategory";
import { typeDefs as topicTypeDefs } from "typeDefs/topic";
import { typeDefs as weatherTypeDefs } from "typeDefs/weather";
import { typeDefs as cityTypeDefs } from "typeDefs/city";

import { categoryResolver } from "resolvers/category";
import { subCategoryResolver } from "resolvers/subCategory";
import { topicResolver } from "resolvers/topic";
import { weatherResolver } from "resolvers/weather";
import { cityResolver } from "resolvers/city";

const rootResolver = {
  Date: GraphQLDateTime,
};

const rootTypeDefs = /* GraphQL */ `
  scalar Date
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
  type PageInfo {
    endCursor: String
    hasNextPage: Boolean
  }
`;

export const schema = makeExecutableSchema({
  typeDefs: [
    rootTypeDefs,
    categoryTypeDefs,
    subCategoryTypeDefs,
    topicTypeDefs,
    weatherTypeDefs,
    cityTypeDefs,
  ],
  resolvers: [
    rootResolver,
    customDateScalarResolver,
    categoryResolver,
    subCategoryResolver,
    topicResolver,
    weatherResolver,
    cityResolver,
  ],
});
