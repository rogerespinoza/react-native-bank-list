import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

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

const BUTTON_COLOR = '#E8ECF4';

export const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    borderRadius: 3,
    borderColor: BUTTON_COLOR,
    backgroundColor: BUTTON_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});
