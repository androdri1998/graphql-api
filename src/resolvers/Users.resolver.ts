import { FieldResolver, Query, Resolver, Root } from "type-graphql";
import { User } from "../dtos/models/User.model";
import { UserInput } from "../dtos/inputs/User.input";

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

  @FieldResolver()
  salary(@Root() user: UserInput) {
    return user.salary_real;
  }
}
