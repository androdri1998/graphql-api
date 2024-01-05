import { Query, Resolver } from "type-graphql";
import { User } from "../models/User.model";

const users = [];

@Resolver(() => User)
export class UsersResolver {
  @Query(() => [User])
  async getUsers() {
    return users;
  }
}
