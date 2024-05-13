import { useState } from 'react';

import { FinancialProduct } from '../../domain';
import { productEmpy } from '../../common';

export function useProductForm({
  initialProduct,
}: {
  initialProduct: FinancialProduct;
}) {
  const [product, setProduct] = useState<FinancialProduct>(
    initialProduct ?? productEmpy,
  );

  const cleanForm = () => {
    setProduct(productEmpy);
  };

  return {
    product,
    setProduct,
    cleanForm,
  };
}
