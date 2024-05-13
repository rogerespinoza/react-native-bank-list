import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { FinancialProduct } from '../../domain';
import { styles } from './styles';
import { Loading, ProductForm, Spacer, useProductForm } from '../../components';
import { useAddProduct } from './useAddProduct';
import { homeRoutes } from '../../navigation';

export function AddProductScreen({
  navigation,
  route,
}: {
  navigation: StackNavigationProp<any, any>;
  route: any;
}) {
  const initialProduct: FinancialProduct = route.params?.product;

  const { cleanForm, product, setProduct } = useProductForm({
    initialProduct,
  });
  const { onSubmitProduct, isLoading } = useAddProduct();

  const navigateToHome = () => {
    navigation.navigate(homeRoutes.productList, {});
  };

  const onSubmit = async () => {
    try {
      await onSubmitProduct(product);
      navigateToHome();
    } catch (error) {
      console.log(error);
    }
  };

  const onResetForm = () => {
    cleanForm();
  };

  return (
    <View style={styles.container}>
      <Loading isVisible={isLoading} />
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <Spacer size={20} />
        <Text>Formulario de Registro</Text>
        <Spacer size={20} />
        <ProductForm
          product={product}
          onChange={setProduct}
          typeForm="create"
          onReset={onResetForm}
          onSubmit={onSubmit}
        />
        <Spacer size={40} />
      </ScrollView>
    </View>
  );
}
