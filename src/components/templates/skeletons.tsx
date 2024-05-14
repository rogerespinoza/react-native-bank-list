import { View, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../common';

export const Skeletons = () => {
  return (
    <View style={styles.container}>
      {Array(10)
        .fill(0)
        .map((item, index) => {
          return <View key={index} style={styles.item} />;
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  item: {
    height: 60,
    marginVertical: 3,
    backgroundColor: colors.gray1,
    borderRadius: 4,
  },
});
