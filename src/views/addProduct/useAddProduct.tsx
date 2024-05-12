import { useState } from 'react';

import { FinancialProduct } from '../../domain';
import { DataHandler } from '../../infraestructure';
import { useProducts } from '../../contexts';

export function useAddProduct({
  initialProduct,
}: {
  initialProduct: FinancialProduct;
}) {
  const [product, setProduct] = useState<FinancialProduct>(
    initialProduct ?? productEmpy,
  );

  const { addProducts } = useProducts();

  const createProduct = async () => {
    await DataHandler.createProduct(product);
  };

  const updateProduct = async () => {
    await DataHandler.updateProduct(product);
  };

  const deleteProduct = async () => {
    await DataHandler.deleteProduct(product);
  };

  const getProducts = async () => {
    const productsData = await DataHandler.fetchProducts();
    addProducts(productsData);
  };

  return {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    product,
    setProduct,
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
