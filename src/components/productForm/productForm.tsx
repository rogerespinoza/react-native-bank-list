import React, { useState } from 'react';
import { Platform, TouchableOpacity } from 'react-native';

import { FinancialProduct } from '../../domain';
import {
  DateIOSPicker,
  openAndroidPicker,
  FormItem,
  Button,
  Spacer,
} from '../../components';
import { TIMESTAMP_ONE_YEAR } from '../../common';
import { getValidationResponse } from './functions';
import { ErrorType, initialError } from './model';
import { styles } from './styles';

export const ProductForm = ({
  product,
  onChange,
  typeForm,
  onSubmit,
}: {
  product: FinancialProduct;
  onChange: (product: FinancialProduct) => void;
  onSubmit: () => Promise<void>;
  onReset: () => void;
  typeForm: 'update' | 'create';
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [error, setError] = useState<ErrorType>(initialError);

  const onChangeProduct = (key: string, value: string) => {
    onChange({ ...product, [key]: value });
  };

  const closeDatePicker = () => {
    setShowDatePicker(false);
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

  const validateForm = async () => {
    try {
      const errors = await getValidationResponse(product);
      setError(errors);
      return !Object.keys(errors).some(item => errors[item].state);
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmitForm = async () => {
    const isValidForm = await validateForm();
    if (!isValidForm) {
      return;
    }
    await onSubmit?.();
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
        value={product.id}
        onChangeText={value => onChangeProduct('id', value)}
        disable={typeForm === 'update'}
        errorText={error.id.label}
        hasError={error.id.state}
      />
      <FormItem
        label="Nombre"
        value={product.name}
        onChangeText={value => onChangeProduct('name', value)}
        errorText={error.name.label}
        hasError={error.name.state}
      />
      <FormItem
        label="Descripción"
        value={product.description}
        onChangeText={value => onChangeProduct('description', value)}
        errorText={error.description.label}
        hasError={error.description.state}
      />
      <FormItem
        label="Logo"
        value={product.logo}
        onChangeText={value => onChangeProduct('logo', value)}
        errorText={error.logo.label}
        hasError={error.logo.state}
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
      <Spacer size={10} />
      <Button label="Enviar" onPress={onSubmitForm} />
      <Spacer size={10} />
      <Button label="Reiniciar" onPress={onSubmitForm} />
    </>
  );
};
