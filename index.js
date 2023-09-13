const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt } = require('graphql');

const user = {
  id: 1,
  name: 'Peterson Wiggers',
  yers: 19,
  profession: 'Programador',
};

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    yers: { type: GraphQLInt },
    profession: { type: GraphQLString },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: 'GetUsers',
  fields: () => ({
    user: {
      type: UserType,
      resolve: () => user,
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.get('/', (req, res) => res.send('GraphQL is running on /graphql'));
const port = 3000;
app.listen(port, () => console.log(`🚀🚀🚀Server running on port ${port}`));
