import React from 'react';
import { Text, View } from 'react-native';

import { FinancialProduct } from '../../domain';
import Spacer from '../../components/spacer';
import { styles } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button } from '../../components';
import { homeRoutes } from '../../navigation/routes';

export function ProductDetailScreen({
  navigation,
  route,
}: {
  navigation: StackNavigationProp<any, any>;
  route: any;
}) {
  const product: FinancialProduct = route.params?.product || {};

  const onEdit = () => {
    navigation.navigate(homeRoutes.addProduct, { product });
  };

  const onDelete = () => {
    navigation.navigate(homeRoutes.addProduct, {});
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
      <Button label="Eliminar" onPress={onDelete} />
    </View>
  );
}
