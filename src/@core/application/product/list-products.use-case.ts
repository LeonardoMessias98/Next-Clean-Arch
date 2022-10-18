import { Product } from "../../domain/entities/product";
import { ProductGateway } from "../../domain/gateways/product.gateways";

export class ListProductsUseCase {
  constructor(private productGateway: ProductGateway) {}

  async execute(): Promise<Product[]> {
    return this.productGateway.findAll();
  }
}
