import { FinancialProduct } from '../../domain';
import { ProductsRepository } from './productsRepository';

export class DataHandler {
  static async fetchProducts() {
    const repository = new ProductsRepository();
    return await repository.getProducts();
  }

  static async createProduct(_item: FinancialProduct) {}

  static async updateProduct() {}

  static async deleteProduct() {}
}
