import { Arg, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { User } from "../dtos/models/User.model";
import { UserInput } from "../dtos/inputs/User.input";
import { SearchUserInput } from "../dtos/inputs/SearchUser.input";

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
    salary_real: 1002,
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
  async user(@Arg("data") user: SearchUserInput) {
    const foundUser = users[user.id];

    return foundUser;
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
