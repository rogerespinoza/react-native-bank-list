import { FinancialProduct } from '../../domain';
import { DataHandler } from '../../infraestructure';
import { useProducts } from '../../contexts';

export function useProductDetail({ product }: { product: FinancialProduct }) {
  const { addProducts } = useProducts();

  const deleteProduct = async () => {
    await DataHandler.deleteProduct(product ?? productEmpy);
  };

  const getProducts = async () => {
    const productsData = await DataHandler.fetchProducts();
    addProducts(productsData);
  };

  return {
    deleteProduct,
    getProducts,
  };
}

const productEmpy: FinancialProduct = {
  id: '',
  name: '',
  description: '',
  logo: '',
  date_release: new Date(),
  date_revision: new Date(),
};
