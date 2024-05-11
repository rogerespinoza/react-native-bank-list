import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import Spacer from '../../../components/spacer';
import { FinancialProduct } from '../../../domain';

export function ItemProduct({
  product,
  index,
  lenght,
}: {
  product: FinancialProduct;
  index: number;
  lenght: number;
}) {
  return (
    <View
      style={[
        styles.itemContainer,
        styles.itemBorderHorizontal,
        index === 0 && styles.itemBorderVerticalTop,
        index === lenght - 1 && styles.itemBorderVerticalDown,
      ]}>
      <Text>{product.name}</Text>
      <Spacer />
      {index < lenght - 1 && <View style={styles.itemSeparator} />}
    </View>
  );
}
