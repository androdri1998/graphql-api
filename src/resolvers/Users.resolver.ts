import { Query, Resolver } from "type-graphql";
import { User } from "../models/User.model";

@Resolver(() => User)
export class UsersResolver {
  @Query(() => User, { nullable: true })
  async loggedUser() {
    return {
      id: 1,
      name: "teste",
      email: "some email",
      age: 21,
      salary: 1000,
      vip: false,
    };
  }
}
