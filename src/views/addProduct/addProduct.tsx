import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { FinancialProduct } from '../../domain';
import { styles } from './styles';
import { Button, ProductForm, Spacer, useProductForm } from '../../components';
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
  const { createProduct, getProducts } = useAddProduct();

  const navigateToHome = () => {
    navigation.navigate(homeRoutes.productList, {});
  };

  const onCreateProduct = async () => {
    try {
      await createProduct(product);
      await getProducts();
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
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <Spacer size={20} />
        <Text>Formulario de Registro</Text>
        <Spacer size={20} />
        <ProductForm
          product={product}
          onChange={setProduct}
          typeForm="create"
        />
        <Spacer size={10} />
        <Button label="Enviar" onPress={onCreateProduct} />
        <Spacer size={10} />
        <Button label="Reiniciar" onPress={onResetForm} />
        <Spacer size={40} />
      </ScrollView>
    </View>
  );
}
