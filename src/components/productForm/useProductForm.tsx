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

  const cleanForm = (ignoreID = false) => {
    if (ignoreID) {
      setProduct({ ...productEmpy, id: product.id });
      return;
    }
    setProduct(productEmpy);
  };

  return {
    product,
    setProduct,
    cleanForm,
  };
}
