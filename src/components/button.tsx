import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../common';

export function Button({
  onPress,
  label,
}: {
  onPress: () => void;
  label: string;
}) {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    borderRadius: 3,
    borderColor: colors.blue1,
    backgroundColor: colors.blue1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});
