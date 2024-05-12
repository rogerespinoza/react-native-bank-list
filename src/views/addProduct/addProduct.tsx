import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import { FinancialProduct } from '../../domain';
import Spacer from '../../components/spacer';
import { styles } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button } from '../../components';
import { ProductForm } from '../../components/productForm';
import { useAddProduct } from './useAddProduct';

export function AddProductScreen({
  route,
}: {
  navigation: StackNavigationProp<any, any>;
  route: any;
}) {
  const initialProduct: FinancialProduct = route.params?.product;

  const {
    createProduct,
    getProducts,
    deleteProduct,
    updateProduct,
    product,
    setProduct,
  } = useAddProduct({ initialProduct });

  const onCreateProduct = async () => {
    try {
      await createProduct();
      await getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const onUpdateProduct = async () => {
    try {
      await updateProduct();
      await getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteProduct = async () => {
    try {
      await deleteProduct();
      await getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <Spacer size={20} />
        <Text>Formulario de Registro</Text>
        <Spacer size={20} />
        <ProductForm product={product} onChange={setProduct} />
        <Spacer size={10} />
        <Button label="Enviar - creat" onPress={onCreateProduct} />
        <Spacer size={10} />
        <Button label="Reiniciar - update" onPress={onUpdateProduct} />
        <Spacer size={10} />
        <Button label="Reiniciar - delete" onPress={onDeleteProduct} />
        <Spacer size={40} />
      </ScrollView>
    </View>
  );
}
