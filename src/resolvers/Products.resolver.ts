import { FieldResolver, Float, Query, Resolver, Root } from "type-graphql";
import { User } from "../dtos/models/User.model";
import { UserInput } from "../dtos/inputs/User.input";
import { Product } from "../dtos/models/Product.model";

@Resolver(() => Product)
export class ProductsResolver {
  @Query(() => Product, { nullable: true })
  async availableProduct() {
    const product = {
      name: "book",
      price: 10,
      discount: 2,
    };

    return product;
  }

  @FieldResolver((type) => Float)
  priceWithDiscount(@Root() product: Product) {
    return product.price - (product.discount || 0);
  }
}
