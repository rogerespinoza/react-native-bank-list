import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';

import { Spacer } from '../components/';

export const InputField = ({
  label,
  hasError = true,
  errorText = '',
}: {
  label: string;
  hasError?: boolean;
  errorText?: string;
}) => {
  return (
    <>
      <Text>{label}</Text>
      <TextInput style={styles.container} />
      {hasError && <Text style={styles.errorText}>{errorText}</Text>}
      <Spacer size={10} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderColor: 'red',
    borderWidth: 1,
    paddingHorizontal: 5,
    borderRadius: 4,
  },
  errorText: {
    color: 'red',
  },
});
