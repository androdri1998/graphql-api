import { ProductDTO } from "../dtos/Product.dto";

export interface ProductsRepository {
  index(): Promise<ProductDTO>;
}
