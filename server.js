const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const cors = require('cors');

const jwt = require('jsonwebtoken');

const schema = require('./schema/schema');
const resolvers = require('./resolvers/resolver');

const app = express();

app.use(cors());

require('dotenv').config();
const { JWT_SECRET, PORT } = process.env;
const getUser = (token) => {
  try {
    if (token) {
      return jwt.verify(token, JWT_SECRET);
    }
    return null;
  } catch (error) {
    return null;
  }
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: ({ req }) => {
    const token = req.get('Authorization') || '';
    return { user: getUser(token.replace('Bearer', '')) };
  },
  introspection: true,
  playground: true,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: PORT || 4300 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000/graphql`);
});
