import { ProductDTO } from "../dtos/Product.dto";

export interface IGetProductService {
  execute(): Promise<ProductDTO>;
}
