import { FinancialProduct } from '../../../domain';
import { DataHandler } from '../../../infraestructure';
import { useProducts } from '../../../contexts';
import { productEmpy } from '../../../common';

export function useProductDetail({ product }: { product: FinancialProduct }) {
  const { addProducts } = useProducts();

  const deleteProduct = async () => {
    await DataHandler.deleteProduct(product ?? productEmpy);
    await getProducts();
  };

  const getProducts = async () => {
    const productsData = await DataHandler.fetchProducts();
    addProducts(productsData);
  };

  return {
    deleteProduct,
  };
}
