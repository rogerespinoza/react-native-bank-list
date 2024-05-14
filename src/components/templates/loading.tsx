import { View, Modal, ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../common';

export function Loading({ isVisible }: { isVisible: boolean }) {
  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.blue1} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000055',
    justifyContent: 'center',
  },
});
