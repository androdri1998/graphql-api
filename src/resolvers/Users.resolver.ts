import { FieldResolver, Query, Resolver, Root } from "type-graphql";
import { User } from "../dtos/models/User.model";
import { UserInput } from "../dtos/inputs/User.input";

const users = {
  1: {
    id: 1,
    name: "teste",
    email: "some email",
  },
  2: {
    id: 2,
    name: "teste 2",
    email: "some email 2",
  },
  3: {
    id: 3,
    name: "teste 3",
    email: "some email 3",
  },
};

@Resolver(() => User)
export class UsersResolver {
  @Query(() => User, { nullable: true })
  async loggedUser() {
    const user = {
      id: 1,
      name: "teste",
      email: "some email",
      age: 21,
      salary_real: 1001,
      vip: false,
    };

    return user;
  }

  @Query(() => [User], { nullable: "items" })
  async users() {
    return Object.values(users).map((value) => value);
  }

  @FieldResolver()
  salary(@Root() user: UserInput) {
    return user.salary_real || null;
  }
}
