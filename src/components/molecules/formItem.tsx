import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Spacer, InputField } from '../atoms';

export const FormItem = ({
  label,
  hasError = false,
  errorText = '',
  value = '',
  onChangeText,
  disable = false,
}: {
  label: string;
  hasError?: boolean;
  disable?: boolean;
  errorText?: string;
  value: string;
  onChangeText?: (value: string) => void;
}) => {
  return (
    <>
      <Text>{label}</Text>
      <InputField
        value={value}
        disable={disable}
        hasError={hasError}
        onChangeText={onChangeText}
      />
      {hasError && <Text style={styles.errorText}>{errorText}</Text>}
      <Spacer size={10} />
    </>
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
  errorText: {
    fontSize: 12,
    color: 'red',
  },
});
