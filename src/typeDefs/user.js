import { gql } from 'apollo-server-express';

export default gql`
  type Query {
    users: [User!]!
    user(id: ID!): User!
  }

  type User {
    id: ID!
    name: String!
  }

  type Mutation {
    createUser(name: String!): User!
    updateUser(id: ID!, name: String!): User!
    deleteUser(id: ID!): User!
  }
`;
