import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';

import { FinancialProduct } from '../../domain';
import { DataHandler } from '../../infraestructure';
import Spacer from '../../components/spacer';
import { styles } from './styles';
import { homeRoutes } from '../../navigation/routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { ListItem } from '../../components';
import { useProducts } from '../../contexts';

export function ProductListScreen({
  navigation,
}: {
  navigation: StackNavigationProp<any, any>;
}) {
  const { products } = useProductList();

  const onNavigateToDetail = (product: FinancialProduct) => {
    navigation.navigate(homeRoutes.productDetail, { product });
  };

  return (
    <View style={styles.container}>
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
      />
    </View>
  );
}

export function useProductList() {
  const { products, addProducts } = useProducts();
  const fetchProducts = async () => {
    try {
      const productsData = await DataHandler.fetchProducts();
      addProducts(productsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    products,
  };
}
