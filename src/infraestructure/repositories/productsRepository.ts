import { FinancialProduct } from '../../domain';
import { dataApi } from '../api';

export class ProductsRepository implements ProductsRepositoryModel {
  // -------- GET PRODUCTS
  async getProducts() {
    try {
      const productsList = await dataApi.getProducts();
      return adapterProductsApi(productsList);
    } catch (error) {
      console.log('|>>> error: ProductsRepository <<<|');
      throw error;
    }
  }
  // -------- CREATE PRODUCTS
  async createProduct() {
    try {
      return adapterProductsApi([]);
    } catch (error) {
      console.log('|>>> error: ProductsRepository <<<|');
      throw error;
    }
  }
  // -------- UPDATE PRODUCTS
  async updateProduct() {
    try {
      return adapterProductsApi([]);
    } catch (error) {
      console.log('|>>> error: ProductsRepository <<<|');
      throw error;
    }
  }
  // -------- DELETE PRODUCTS
  async deleteProduct() {
    try {
      return adapterProductsApi([]);
    } catch (error) {
      console.log('|>>> error: ProductsRepository <<<|');
      throw error;
    }
  }
}

// -------- ADAPTERS
const adapterProductsApi = (
  productApiList: dataApi.ProductApi[],
): FinancialProduct[] => {
  return productApiList.map(item => ({
    ...item,
    date_release: new Date(item.date_release),
    date_revision: new Date(item.date_revision),
  }));
};

// -------- REPOSITORY MODEL
interface ProductsRepositoryModel {
  getProducts: () => Promise<FinancialProduct[]>;
  updateProduct: () => Promise<FinancialProduct[]>;
  createProduct: () => Promise<FinancialProduct[]>;
  deleteProduct: () => Promise<FinancialProduct[]>;
}
