import React from 'react';
import { FlatList, View } from 'react-native';

import { FinancialProduct } from '../../domain';
import { styles } from './styles';
import { homeRoutes } from '../../navigation/routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, ListItem, Loading, Spacer } from '../../components';
import { useProductList } from './useProductsList';

export function ProductListScreen({
  navigation,
}: {
  navigation: StackNavigationProp<any, any>;
}) {
  const { products, isLoading } = useProductList();

  const onNavigateToDetail = (product: FinancialProduct) => {
    navigation.navigate(homeRoutes.productDetail, { product });
  };

  const onNavigateToAddProduct = () => {
    navigation.navigate(homeRoutes.addProduct, {});
  };

  return (
    <View style={styles.container}>
      <Loading isVisible={isLoading} />
      <Spacer size={20} />
      <FlatList
        data={products}
        renderItem={({ item, index }) => (
          <ListItem
            key={item.id}
            onPress={() => onNavigateToDetail(item)}
            product={item}
            index={index}
            lenght={products.length}
          />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
      <Spacer size={30} />
      <Button label="Agregar" onPress={onNavigateToAddProduct} />
      <Spacer size={50} />
    </View>
  );
}
