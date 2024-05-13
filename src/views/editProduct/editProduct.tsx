import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import { FinancialProduct } from '../../domain';
import { styles } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProductForm, useProductForm, Spacer, Loading } from '../../components';
import { useEditProduct } from './useEditProduct';
import { homeRoutes } from '../../navigation';

export function EditProductScreen({
  route,
  navigation,
}: {
  navigation: StackNavigationProp<any, any>;
  route: any;
}) {
  const initialProduct: FinancialProduct = route.params?.product;

  const { onSubmitProduct, isLoading } = useEditProduct();
  const { cleanForm, product, setProduct } = useProductForm({
    initialProduct,
  });

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
    cleanForm(true);
  };

  return (
    <View style={styles.container}>
      <Loading isVisible={isLoading} />
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <Spacer size={20} />
        <Text>Editar Registro</Text>
        <Spacer size={20} />
        <ProductForm
          product={product}
          onChange={setProduct}
          typeForm="update"
          onReset={onResetForm}
          onSubmit={onSubmit}
        />
        <Spacer size={40} />
      </ScrollView>
    </View>
  );
}
