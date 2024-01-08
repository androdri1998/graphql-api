# products-graphql-api

This is a project to practice GraphQl and Node.js

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
