import React from 'react';
import { FlatList, View } from 'react-native';

import { FinancialProduct } from '../../domain';
import { styles } from './styles';
import { homeRoutes } from '../../navigation/routes';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  Button,
  InputField,
  ListItem,
  Skeletons,
  Spacer,
} from '../../components';
import { useProductList } from './useProductsList';

export function ProductListScreen({
  navigation,
}: {
  navigation: StackNavigationProp<any, any>;
}) {
  const { products, isLoading, search, setSearch } = useProductList();

  const onNavigateToDetail = (product: FinancialProduct) => {
    navigation.navigate(homeRoutes.productDetail, { product });
  };

  const onNavigateToAddProduct = () => {
    navigation.navigate(homeRoutes.addProduct, {});
  };

  if (isLoading) {
    return <Skeletons />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <InputField
            value={search}
            onChangeText={setSearch}
            placeholder="Search..."
          />
        }
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
