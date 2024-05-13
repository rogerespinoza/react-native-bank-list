import { useEffect, useState } from 'react';

import { DataHandler } from '../../infraestructure';
import { useProducts } from '../../contexts';

export function useProductList() {
  const { products, addProducts } = useProducts();
  const [isLoading, setIsLoading] = useState(false);
  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const productsData = await DataHandler.fetchProducts();
      addProducts(productsData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    products,
    isLoading,
  };
}
