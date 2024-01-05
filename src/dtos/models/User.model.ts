import { ID, Int, Float, Field, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  @Field((type) => ID)
  readonly id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field((type) => Int, { nullable: true })
  age: number;

  @Field((type) => Float, { nullable: true })
  salary: number;

  @Field({ nullable: true })
  vip: boolean;
}
