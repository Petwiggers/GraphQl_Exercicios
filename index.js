const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLEnumType,
} = require('graphql');
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

// Define um enum para representar os códigos de status personalizados
const StatusEnum = new GraphQLEnumType({
  name: 'Status',
  values: {
    SUCCESS: { value: 'success' },
    ERROR: { value: 'error' },
  },
});

// Define um tipo para representar a resposta
const ResponseType = new GraphQLObjectType({
  name: 'Response',
  fields: () => ({
    status: { type: StatusEnum },
    message: { type: GraphQLString },
    data: { type: UserType }, // Pode ser qualquer tipo de dado
  }),
});

const Query = new GraphQLObjectType({
  name: 'Rede_Social',
  fields: () => ({
    user: {
      type: ResponseType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (parent, args) => {
        const user = data.GetUser(args.id);
        if (!user) {
          return { status: 'error', message: 'User not found', data: null };
        }
        return { status: 'success', message: 'successful operation', data: user };
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve: () => data.GetUsers(),
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve: () => data.GetAllPosts(),
    },
  }),
});

const Mutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ModifyTitlePosts: {
      type: PostType,
      args: {
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        console.log(args.title, args.id);
        post = data.ModifyTitlePost(args.title, args.id);
        return {
          id: post.id,
          title: post.title,
        };
      },
    },
  }),
});

const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutations,
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
