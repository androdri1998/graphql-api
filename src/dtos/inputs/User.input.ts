import { ID, Int, Float, Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserInput {
  @Field((type) => ID)
  readonly id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field((type) => Int)
  age: number;

  @Field((type) => Float)
  salary_real: number;

  @Field()
  vip: boolean;
}
