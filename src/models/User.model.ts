import { ID, Int, Float, Field, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  @Field((type) => ID)
  readonly id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field((type) => Int)
  age: number;

  @Field((type) => Float)
  salary: number;

  @Field()
  vip: boolean;
}
