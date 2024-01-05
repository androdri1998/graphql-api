import { ProductDTO } from "../../dtos/Product.dto";
import { ICalcDiscountService } from "../CalcDiscountService";

export default class CalcDiscountService implements ICalcDiscountService {
  execute(product: ProductDTO): number {
    const discount = product.price * (product.discount || 0);
    const priceWithDiscount = product.price - discount;
    return priceWithDiscount;
  }
}
