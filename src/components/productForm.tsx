import React, { useState } from 'react';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';

import { FinancialProduct } from '../domain';
import { DateIOSPicker, openAndroidPicker, FormItem } from '../components';
import { TIMESTAMP_ONE_YEAR, productEmpy } from '../common';

export const ProductForm = ({
  product,
  onChange,
  typeForm,
}: {
  product: FinancialProduct;
  onChange: (product: FinancialProduct) => void;
  onSubmit?: () => void;
  onReset?: () => void;
  typeForm: 'update' | 'create';
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const onChangeProduct = (key: string, value: string) => {
    onChange({ ...product, [key]: value });
  };

  const closeDatePicker = () => {
    setShowDatePicker(false);
  };

  const openDatePicker = () => {
    if (Platform.OS === 'ios') {
      setShowDatePicker(true);
      return;
    }
    openAndroidPicker({
      onChange: onChangeDate,
      date: product.date_release,
    });
  };

  const onChangeDate = (_: any, _date?: Date) => {
    const newDate = _date ?? new Date();
    onChange({
      ...product,
      date_release: newDate,
      date_revision: new Date(newDate.getTime() + TIMESTAMP_ONE_YEAR),
    });
    closeDatePicker();
  };

  return (
    <>
      <DateIOSPicker
        close={closeDatePicker}
        onChange={onChangeDate}
        isVisible={showDatePicker}
        date={product.date_release}
      />
      <FormItem
        label="ID"
        errorText="ID no válido"
        value={product.id}
        onChangeText={value => onChangeProduct('id', value)}
        disable={typeForm === 'update'}
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
      <TouchableOpacity onPress={openDatePicker} activeOpacity={1}>
        <FormItem
          label="Fecha de Liberación"
          errorText="Este campo es requerido!"
          value={product.date_release.toISOString().substring(0, 10)}
          disable={true}
        />
        <TouchableOpacity onPress={openDatePicker} style={styles.buttonDate} />
      </TouchableOpacity>
      <FormItem
        label="Fecha de Revisión"
        errorText="Este campo es requerido!"
        value={product.date_revision.toISOString().substring(0, 10)}
        disable={true}
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

const styles = StyleSheet.create({
  buttonDate: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
});
