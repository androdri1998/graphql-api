import { ProductDTO } from "../../dtos/Product.dto";
import { IGetProductService } from "../GetProductService";
import { ProductsRepository } from "../../repositories/ProductsRepository";

export default class GetProductService implements IGetProductService {
  productsRepository: ProductsRepository;

  constructor(productsRepository: ProductsRepository) {
    this.productsRepository = productsRepository;
  }

  async execute(): Promise<ProductDTO> {
    const product = await this.productsRepository.index();
    return product;
  }
}
