import React from 'react';
import { FlatList, View } from 'react-native';

import { FinancialProduct } from '../../../domain';
import { styles } from './styles';
import { homeRoutes } from '../../../navigation/routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { useProductList } from './useProductsList';
import { Button, Spacer, InputField } from '../../atoms';
import { ListItem } from '../../molecules/listItem';
import { Skeletons } from '../../templates';

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
          <>
            <Spacer size={45} />
            <InputField
              value={search}
              onChangeText={setSearch}
              placeholder="Search..."
            />
            <Spacer size={35} />
          </>
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
      <Button color="yellow" label="Agregar" onPress={onNavigateToAddProduct} />
      <Spacer size={60} />
    </View>
  );
}
