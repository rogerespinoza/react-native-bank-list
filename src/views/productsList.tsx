import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import { FinancialProduct } from '../domain';
import { DataHandler } from '../infraestructure';
import Spacer from '../components/spacer';
import { ItemProduct } from './components';
import { styles } from './styles';

export function HomeScreen() {
  const [products, setProducts] = useState<FinancialProduct[]>([]);
  const fetchProducts = async () => {
    try {
      const productsData = await DataHandler.fetchProducts();
      setProducts(productsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
      <Spacer size={20} />
      <FlatList
        data={products}
        renderItem={({ item, index }) => (
          <ItemProduct product={item} index={index} lenght={products.length} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
