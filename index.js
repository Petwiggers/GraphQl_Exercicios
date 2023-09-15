const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');
const data = require('./data.js');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    yers: { type: GraphQLInt },
    profession: { type: GraphQLString },
  }),
});

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    publishDate: { type: GraphQLString },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: 'GetUsers',
  fields: () => ({
    user: {
      type: UserType,
      resolve: () => data.GetUser(),
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve: () => data.GetAllPosts(),
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
