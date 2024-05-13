import { FinancialProduct } from '../../domain';
import { dataApi } from '../api';

export class ProductsRepository implements ProductsRepositoryModel {
  // -------- GET PRODUCTS
  async getProducts() {
    try {
      const productsList = await dataApi.getProducts();
      return adapterProductsApi(productsList as dataApi.ProductApi[]);
    } catch (error) {
      console.log('|>>> error: ProductsRepository <<<|');
      throw error;
    }
  }
  // -------- CREATE PRODUCTS
  async createProduct(_item: FinancialProduct) {
    try {
      const productApi = adapterProductApi(_item);
      return await dataApi.createProduct(productApi);
    } catch (error) {
      console.log('|>>> error: ProductsRepository <<<|');
      throw error;
    }
  }
  // -------- UPDATE PRODUCTS
  async updateProduct(_item: FinancialProduct) {
    try {
      const productApi = adapterProductApi(_item);
      return await dataApi.updateProduct(productApi);
    } catch (error) {
      console.log('|>>> error: ProductsRepository <<<|');
      throw error;
    }
  }
  // -------- DELETE PRODUCTS
  async deleteProduct(_item: FinancialProduct) {
    try {
      const productApi = adapterProductApi(_item);
      return await dataApi.deleteProduct(productApi);
    } catch (error) {
      console.log('|>>> error: ProductsRepository <<<|');
      throw error;
    }
  }
  // -------- GET VERIFY ID
  async getVerifyID(_item: FinancialProduct) {
    try {
      const productApi = adapterProductApi(_item);
      return (await dataApi.getVerifyId(productApi)) as boolean;
    } catch (error) {
      console.log('|>>> error: ProductsRepository <<<|');
      throw error;
    }
  }
}

// -------- ADAPTERS
const adapterProductApi = (product: FinancialProduct): dataApi.ProductApi => {
  return {
    ...product,
    date_release: product.date_release.toISOString().substring(0, 10),
    date_revision: product.date_revision.toISOString().substring(0, 10),
  };
};

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
  updateProduct: (_item: FinancialProduct) => Promise<any>;
  createProduct: (_item: FinancialProduct) => Promise<any>;
  deleteProduct: (_item: FinancialProduct) => Promise<any>;
}
