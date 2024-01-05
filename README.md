# graphql-api

This is a project to practice graphql api and node.js

# Libs

- typescript
- @apollo/server
- graphql
- type-graphql

# Setup application

## Install dependencies

Run `$ npm install` to install dependencies

## Start application

Run `$ npm run start` to compile and start application.

# Available Commands

## Start application

Run `$ npm run start` to compile and start application.

## Compile application

Run `$ npm run compile` to compile application.

## Start application in watching mode

Run `$ npm run dev` to start application in watching mode.

# Modules

## Users

```
type Query {

  user(data: SearchUserInput!): User
  users: [User]!
}

input SearchUserInput {
  id: ID!
}

type User {
  age: Int
  email: String!
  id: ID!
  name: String!
  salary: Float
  vip: Boolean
}
```

### Queries available

- user(data: SearchUserInput!): User
- users: [User]!

## Products

```
type Product {
  discount: Float
  name: String!
  price: Float!
  priceWithDiscount: Float!
}

type Query {
  featureProduct: Product
}
```

### Queries available

- featureProduct: Product

## Profiles

```
type Profile {
  id: ID!
  name: String!
}

type Query {
  profile(data: SearchProfileInput!): Profile
  profiles: [Profile]!
}

input SearchProfileInput {
  id: ID!
}
```

### Queries available

- profile(data: SearchProfileInput!): Profile
- profiles: [Profile]!
