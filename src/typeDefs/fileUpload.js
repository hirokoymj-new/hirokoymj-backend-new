export const typeDefs = /* GraphQL */ `
  scalar Upload

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  extend type Query {
    otherFields: Boolean!
  }

  extend type Mutation {
    singleUpload(file: Upload!): File!
  }
`;
