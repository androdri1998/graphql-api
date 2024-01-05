import { Float, Field, ObjectType } from "type-graphql";

@ObjectType()
export class Product {
  @Field()
  name: string;

  @Field((type) => Float)
  price: number;

  @Field((type) => Float, { nullable: true })
  discount: number;
}
