import { FinancialProduct } from '../../domain';
import { DataHandler } from '../../infraestructure';
import { useProducts } from '../../contexts';

export function useEditProduct() {
  const { addProducts } = useProducts();

  const updateProduct = async (_item: FinancialProduct) => {
    await DataHandler.updateProduct(_item);
  };

  const getProducts = async () => {
    const productsData = await DataHandler.fetchProducts();
    addProducts(productsData);
  };

  return {
    getProducts,
    updateProduct,
  };
}
