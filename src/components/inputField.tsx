import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export const InputField = ({
  hasError = false,
  value = '',
  onChangeText,
  disable = false,
  placeholder = '',
}: {
  hasError?: boolean;
  disable?: boolean;
  value: string;
  placeholder?: string;
  onChangeText?: (value: string) => void;
}) => {
  return (
    <TextInput
      style={[styles.container, hasError && styles.containerError]}
      value={value}
      editable={!disable}
      onChangeText={newText => onChangeText?.(newText)}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderWidth: 1,
    paddingHorizontal: 5,
    borderRadius: 4,
  },
  containerError: {
    borderColor: 'red',
  },
});
