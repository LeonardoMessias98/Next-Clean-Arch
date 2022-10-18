import { AxiosInstance } from "axios";
import { Product } from "../../domain/entities/product";
import { ProductGateway } from "../../domain/gateways/product.gateways";

export class ProductHttpGateway implements ProductGateway {
  constructor(private http: AxiosInstance) {}

  findAll(): Promise<Product[]> {
    return this.http
      .get<Product[]>("/products")
      .then((res: { data: Product[] }) =>
        res.data.map(
          (data) =>
            new Product({
              id: data.id,
              name: data.name,
              description: data.description,
              price: data.price,
            })
        )
      );
  }

  findById(id: number): Promise<Product> {
    return this.http.get<Product>(`/products/${id}`).then(
      (res: { data: Product }) =>
        new Product({
          id: res.data.id,
          name: res.data.name,
          description: res.data.description,
          price: res.data.price,
        })
    );
  }
}
