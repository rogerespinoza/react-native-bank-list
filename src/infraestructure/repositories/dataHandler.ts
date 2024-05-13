import { FinancialProduct } from '../../domain';
import { ProductsRepository } from './productsRepository';

export class DataHandler {
  static async fetchProducts() {
    const repository = new ProductsRepository();
    return await repository.getProducts();
  }

  static async createProduct(_item: FinancialProduct) {
    const repository = new ProductsRepository();
    return await repository.createProduct(_item);
  }

  static async updateProduct(_item: FinancialProduct) {
    const repository = new ProductsRepository();
    return await repository.updateProduct(_item);
  }

  static async deleteProduct(_item: FinancialProduct) {
    const repository = new ProductsRepository();
    await repository.deleteProduct(_item);
  }

  static async verifyProductID(_item: FinancialProduct) {
    const repository = new ProductsRepository();
    return await repository.getVerifyID(_item);
  }
}
