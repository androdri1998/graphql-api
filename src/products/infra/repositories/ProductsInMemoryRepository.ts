import { ProductDTO } from "../../dtos/Product.dto";
import { ProductsRepository } from "../../repositories/ProductsRepository";

export default class ProductsInMemoryRepository implements ProductsRepository {
  database: ProductDTO;

  constructor(database: ProductDTO) {
    this.database = database;
  }

  async index(): Promise<ProductDTO> {
    return this.database;
  }
}
