import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FinancialProduct } from '../../domain';
import { colors } from '../../common';
import { Spacer } from './../atoms';

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
    <>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.itemContainer,
          styles.itemBorderHorizontal,
          index === 0 && styles.itemBorderVerticalTop,
          index === lenght - 1 && styles.itemBorderVerticalDown,
        ]}>
        <Spacer size={10} orientation="horizontal" />
        <View>
          <Spacer />
          <Text numberOfLines={1} style={styles.nameText}>
            {product.name}
          </Text>
          <Spacer size={8} />
          <Text
            numberOfLines={1}
            style={styles.idText}>{`ID: ${product.id?.substring(0, 15)}`}</Text>
          <Spacer />
        </View>
        <Spacer />
        <Image
          source={require('../../assets/right-arrow-icon.png')}
          style={styles.icon}
        />
        <Spacer size={20} orientation="horizontal" />
      </TouchableOpacity>
      {index < lenght - 1 && <View style={styles.itemSeparator} />}
    </>
  );
}

const BORDER_WRAPPER = 1;

const styles = StyleSheet.create({
  itemContainer: {
    height: 75,
    alignContent: 'center',
    flexDirection: 'row',
  },
  itemBorderHorizontal: {
    borderColor: colors.gray1,
    borderLeftWidth: BORDER_WRAPPER,
    borderRightWidth: BORDER_WRAPPER,
  },
  itemBorderVerticalTop: {
    borderColor: colors.gray1,
    borderTopWidth: BORDER_WRAPPER,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  itemBorderVerticalDown: {
    borderColor: colors.gray1,
    borderBottomWidth: BORDER_WRAPPER,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
  },
  itemSeparator: {
    height: 1.5,
    backgroundColor: colors.gray1,
    width: '97%',
    alignSelf: 'center',
  },
  nameText: {
    fontWeight: '500',
    color: '#000000dd',
    width: 270,
  },
  idText: {
    color: '#00000077',
    fontWeight: '500',
    width: 270,
  },
  icon: {
    height: 13,
    width: 13,
    alignSelf: 'center',
  },
});
