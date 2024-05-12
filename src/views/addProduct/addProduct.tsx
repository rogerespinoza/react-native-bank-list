import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { FinancialProduct } from '../../domain';
import Spacer from '../../components/spacer';
import { styles } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button } from '../../components';
import { ProductForm } from '../../components/productForm';

export function AddProductScreen({
  route,
}: {
  navigation: StackNavigationProp<any, any>;
  route: any;
}) {
  const initialProduct: FinancialProduct = route.params?.product;

  const [product, setProduct] = useState<FinancialProduct>(
    initialProduct ?? productEmpy,
  );

  return (
    <View style={styles.container}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <Spacer size={20} />
        <Text>Formulario de Registro</Text>
        <Spacer size={20} />
        <ProductForm product={product} onChange={setProduct} />
        <Spacer size={10} />
        <Button label="Enviar" onPress={() => {}} />
        <Spacer size={10} />
        <Button label="Reiniciar" onPress={() => {}} />
        <Spacer size={40} />
      </ScrollView>
    </View>
  );
}

const productEmpy: FinancialProduct = {
  id: '',
  name: '',
  description: '',
  logo: '',
  date_release: new Date(),
  date_revision: new Date(),
};
