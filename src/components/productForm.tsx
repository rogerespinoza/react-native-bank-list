import React, { useState } from 'react';

import { FinancialProduct } from '../domain';
import { FormItem } from '../components';
import { productEmpy } from '../common';

export const ProductForm = ({
  product,
  onChange,
}: {
  product: FinancialProduct;
  onChange: (product: FinancialProduct) => void;
  onSubmit?: () => void;
  onReset?: () => void;
}) => {
  const onChangeProduct = (key: string, value: string) => {
    onChange({ ...product, [key]: value });
  };

  return (
    <>
      <FormItem
        label="ID"
        errorText="ID no válido"
        value={product.id}
        onChangeText={value => onChangeProduct('id', value)}
      />
      <FormItem
        label="Nombre"
        errorText="Este campo es requerido!"
        value={product.name}
        onChangeText={value => onChangeProduct('name', value)}
      />
      <FormItem
        label="Descripción"
        errorText="Este campo es requerido!"
        value={product.description}
        onChangeText={value => onChangeProduct('description', value)}
      />
      <FormItem
        label="Logo"
        errorText="Este campo es requerido!"
        value={product.logo}
        onChangeText={value => onChangeProduct('logo', value)}
      />
      <FormItem
        label="Fecha de Liberación"
        errorText="Este campo es requerido!"
        value={product.date_release.toISOString().substring(0, 10)}
        onChangeText={() => {}}
      />
      <FormItem
        label="Fecha de Revisión"
        errorText="Este campo es requerido!"
        value={product.date_revision.toISOString().substring(0, 10)}
        onChangeText={() => {}}
      />
    </>
  );
};

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
