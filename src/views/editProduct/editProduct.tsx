import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import { FinancialProduct } from '../../domain';
import { styles } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, ProductForm, useProductForm, Spacer } from '../../components';
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

  const { getProducts, updateProduct } = useEditProduct();
  const { cleanForm, product, setProduct } = useProductForm({
    initialProduct,
  });

  const navigateToHome = () => {
    navigation.navigate(homeRoutes.productList, {});
  };

  const onUpdateProduct = async () => {
    try {
      await updateProduct(product);
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
        <Text>Editar Registro</Text>
        <Spacer size={20} />
        <ProductForm product={product} onChange={setProduct} />
        <Spacer size={10} />
        <Button label="Guardar" onPress={onUpdateProduct} />
        <Spacer size={10} />
        <Button label="Reiniciar" onPress={onResetForm} />
        <Spacer size={40} />
      </ScrollView>
    </View>
  );
}
