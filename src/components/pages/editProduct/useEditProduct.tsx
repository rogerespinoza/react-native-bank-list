import { FinancialProduct } from '../../../domain';
import { DataHandler } from '../../../infraestructure';
import { useProducts } from '../../../contexts';
import { useState } from 'react';

export function useEditProduct() {
  const [isLoading, setIsLoading] = useState(false);
  const { addProducts } = useProducts();

  const updateProduct = async (_item: FinancialProduct) => {
    await DataHandler.updateProduct(_item);
  };

  const getProducts = async () => {
    const productsData = await DataHandler.fetchProducts();
    addProducts(productsData);
  };

  const onSubmitProduct = async (_product: FinancialProduct) => {
    try {
      setIsLoading(true);
      await updateProduct(_product);
      await getProducts();
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    onSubmitProduct,
    isLoading,
  };
}
