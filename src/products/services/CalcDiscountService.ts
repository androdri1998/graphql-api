import { ProductDTO } from "../dtos/Product.dto";

export interface ICalcDiscountService {
  execute(product: ProductDTO): number;
}
