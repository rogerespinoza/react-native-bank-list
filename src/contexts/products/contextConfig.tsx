import { createContext, useContext } from 'react';
import { FinancialProduct } from '../../domain';

export const defaultState: ProductsState = {
  products: [],
  addProducts: () => {},
  addProduct: () => {},
  updateProduct: () => {},
  removeProduct: () => {},
};

export interface ProductsState {
  products: FinancialProduct[];
  addProducts: (_item: FinancialProduct[]) => void;
  addProduct: (_item: FinancialProduct) => void;
  updateProduct: (_item: FinancialProduct) => void;
  removeProduct: (_item: FinancialProduct) => void;
}

export const ProductsContext = createContext<ProductsState>(defaultState);
export const useProducts = () => useContext<ProductsState>(ProductsContext);
