import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Spacer from '../../../../components/spacer';
import { FinancialProduct } from '../../../../domain';

export function ItemProduct({
  product,
  index,
  lenght,
  onPress,
}: {
  onPress: () => void;
  product: FinancialProduct;
  index: number;
  lenght: number;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.itemContainer,
        styles.itemBorderHorizontal,
        index === 0 && styles.itemBorderVerticalTop,
        index === lenght - 1 && styles.itemBorderVerticalDown,
      ]}>
      <Text>{product.name}</Text>
      <Text>{product.description}</Text>
      <Spacer />
      {index < lenght - 1 && <View style={styles.itemSeparator} />}
    </TouchableOpacity>
  );
}
