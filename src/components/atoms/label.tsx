import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Spacer } from './spacer';

export const Label = ({ label, text }: { label: string; text: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Spacer orientation="horizontal" />
      <Text numberOfLines={1} style={styles.text}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  label: {
    fontWeight: '500',
    fontSize: 14,
    color: '#00000088',
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
    color: '#000000',
    width: 150,
    textAlign: 'right',
  },
});
