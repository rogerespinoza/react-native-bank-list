import { useEffect, useState } from 'react';

import { DataHandler } from '../../../infraestructure';
import { useProducts } from '../../../contexts';
import { FinancialProduct } from '../../../domain';

export function useProductList() {
  const { products, addProducts } = useProducts();

  const [isLoading, setIsLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] =
    useState<FinancialProduct[]>(products);
  const [search, setSearch] = useState('');

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

  const filterProducts = (_search: string, _products: FinancialProduct[]) => {
    return _products.filter(item =>
      item.name.toLowerCase().includes(_search.toLowerCase()),
    );
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const _filteredProducts = filterProducts(search, products);
    setFilteredProducts(_filteredProducts);
  }, [products, search]);

  return {
    products: filteredProducts,
    isLoading,
    search,
    setSearch,
  };
}
