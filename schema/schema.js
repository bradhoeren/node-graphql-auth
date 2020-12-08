const { gql } = require('apollo-server');
const typeDefs = gql`
  type User {
    user_id: String!
    username: String!
    email: String!
    full_name: String
    preferred_name: String
    group: String
    active: Boolean
  }
  type Institution {
    institution_id: String!
    name: String
    customer: Boolean
    campuses: [Campus]
  }
  type Campus {
    campus_id: String!
    name: String
  }
  type Environment {
    environment_id: String!
    production: Boolean!
    instance_name: String!
    ws_inst: String
    database: DatabaseServer
  }
  type DatabaseServer {
    database_server_id: String!
    name: String!
    type: String!
  }
  type AuthPayload {
    token: String!
    user: User!
  }
  type resetPassword {
    token: String!
    email: String!
    password: String!
  }
  type Query {
    users: [User!]!
    user(user_id: String!): User
    me: User
    institutions: [Institution!]!
    institution(institution_id: String!): Institution
    campuses: [Campus!]!
    campus(campus_id: String!): Campus
    environments: [Environment!]!
    environment(environment_id: String!): Environment
  }
  type Mutation {
    registerUser(username: String, email: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    resetPassword(token: String!, email: String!, password: String!): resetPassword!
  }
`;
module.exports = typeDefs;
