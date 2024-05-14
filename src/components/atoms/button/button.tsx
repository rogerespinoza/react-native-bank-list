import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { colorBG, colorText, styles } from './styles';

type ColorButton = 'yellow' | 'red' | 'blue';

export function Button({
  onPress,
  label,
  color = 'blue',
}: {
  onPress: () => void;
  label: string;
  color?: ColorButton;
}) {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, colorBG(color)]}
      onPress={onPress}>
      <Text style={[styles.text, colorText(color)]}>{label}</Text>
    </TouchableOpacity>
  );
}
