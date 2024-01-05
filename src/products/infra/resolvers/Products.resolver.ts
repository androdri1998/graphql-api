import { FieldResolver, Float, Query, Resolver, Root } from "type-graphql";
import { Product } from "../dtos/models/Product.model";
import { product as productData } from "../database";
import ProductsInMemoryRepository from "../repositories/ProductsInMemoryRepository";
import GetProductService from "../../services/implementations/GetProduct.service";
import CalcDiscountService from "../../services/implementations/CalcDiscount.service";

@Resolver(() => Product)
export class ProductsResolver {
  @Query(() => Product, { nullable: true })
  async featureProduct() {
    const productsRepository = new ProductsInMemoryRepository(productData);
    const getProductService = new GetProductService(productsRepository);

    const product = await getProductService.execute();

    return product;
  }

  @FieldResolver((type) => Float)
  priceWithDiscount(@Root() product: Product) {
    const calcDiscountService = new CalcDiscountService();

    const price = calcDiscountService.execute(product);

    return price;
  }
}
