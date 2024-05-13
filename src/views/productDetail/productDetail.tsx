import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { FinancialProduct } from '../../domain';
import { styles } from './styles';
import { Button, Spacer } from '../../components';
import { homeRoutes } from '../../navigation';
import { useProductDetail } from './useProductDetail';

export function ProductDetailScreen({
  navigation,
  route,
}: {
  navigation: StackNavigationProp<any, any>;
  route: any;
}) {
  const product: FinancialProduct = route.params?.product || {};

  const { deleteProduct, getProducts } = useProductDetail({ product });

  const navigateToHome = () => {
    navigation.navigate(homeRoutes.productList, {});
  };

  const navigateToEditProduct = () => {
    navigation.navigate(homeRoutes.editProduct, { product });
  };

  const onEdit = () => {
    navigateToEditProduct();
  };

  const onDelete = async () => {
    try {
      await deleteProduct();
      await getProducts();
      navigateToHome();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Spacer size={20} />
      <Text>{`ID: ${product.id?.substring(0, 8) ?? ''}`}</Text>
      <Text>Información extra</Text>
      <Text>{product.name}</Text>
      <Text>{product.description}</Text>
      <Text>{product.date_release?.toISOString().substring(0, 10) ?? ''}</Text>
      <Text>{product.date_revision?.toISOString().substring(0, 10) ?? ''}</Text>
      <Spacer size={10} />
      <Button label="Editar" onPress={onEdit} />
      <Spacer size={10} />
      <Button color="red" label="Eliminar" onPress={onDelete} />
    </View>
  );
}
