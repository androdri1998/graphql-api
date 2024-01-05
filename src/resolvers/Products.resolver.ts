import { FieldResolver, Float, Query, Resolver, Root } from "type-graphql";
import { Product } from "../dtos/models/Product.model";

@Resolver(() => Product)
export class ProductsResolver {
  @Query(() => Product, { nullable: true })
  async featureProduct() {
    const product = {
      name: "book",
      price: 10,
      discount: 0.2,
    };

    return product;
  }

  @FieldResolver((type) => Float)
  priceWithDiscount(@Root() product: Product) {
    const discount = product.price * (product.discount || 0);
    return product.price - discount;
  }
}
