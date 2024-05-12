import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Spacer from '../components/spacer';
import { FinancialProduct } from '../domain';
import { colors } from '../common';

export function ListItem({
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

const BORDER_WRAPPER = 1.5;

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
  },
  itemBorderHorizontal: {
    borderColor: colors.gray1,
    borderLeftWidth: BORDER_WRAPPER,
    borderRightWidth: BORDER_WRAPPER,
  },
  itemBorderVerticalTop: {
    borderColor: colors.gray1,
    borderTopWidth: BORDER_WRAPPER,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  itemBorderVerticalDown: {
    borderColor: colors.gray1,
    borderBottomWidth: BORDER_WRAPPER,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  itemSeparator: {
    height: 2,
    backgroundColor: colors.gray1,
    width: '98%',
    alignSelf: 'center',
  },
});
