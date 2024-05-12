import React, { ReactNode, useState } from 'react';

import { ProductsContext } from './contextConfig';
import { FinancialProduct } from '../../domain';

export const ProductsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [products, setProducts] = useState<FinancialProduct[]>([]);

  const addProducts = (_items: FinancialProduct[]) => {
    setProducts([..._items]);
  };

  const addProduct = (_item: FinancialProduct) => {
    setProducts(prevState => [...prevState, _item]);
  };

  const updateProduct = (_item: FinancialProduct) => {
    setProducts(prevState => [...prevState, _item]);
  };

  const removeProduct = (_item: FinancialProduct) => {
    setProducts(prevState => [...prevState, _item]);
  };

  const contextValue = {
    products,
    addProduct,
    addProducts,
    removeProduct,
    updateProduct,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
