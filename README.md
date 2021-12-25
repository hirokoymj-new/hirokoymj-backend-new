https://www.graphql-tools.com/docs/server-setup
https://www.apollographql.com/docs/apollo-server/getting-started/
https://www.apollographql.com/docs/apollo-server/integrations/middleware/

https://www.apollographql.com/docs/apollo-server/data/resolvers/
https://www.apollographql.com/docs/apollo-server/schema/schema/

https://www.apollographql.com/blog/backend/schema-design/modularizing-your-graphql-schema-code/

# Schema basics

## Supported types

- Scalar
- Object: Query, Mutation, and Subscription
- Input
- Enum
- Union
- Interface

### The Query type

```js
type Query {
    books: [Book]
    authors: [Author]
}

extend type Query{
    ...
}
```

# RESTDataSource reference

https://www.apollographql.com/docs/apollo-server/data/data-sources/#restdatasource-reference
