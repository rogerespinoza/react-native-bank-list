import React from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Button, Spacer } from '../atoms/';
import { colors } from '../../common';

export const ModalConfirmation = ({
  nameProduct,
  onConfirm,
  onCancel,
  isVisible,
}: {
  isVisible: boolean;
  nameProduct: string;
  onConfirm: () => void;
  onCancel: () => void;
}) => {
  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <View style={styles.background}>
        <Spacer />
        <View style={styles.container}>
          <TouchableOpacity style={styles.buttonClose} onPress={onCancel}>
            <Image
              source={require('../../assets/close-icon.png')}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
          <Spacer size={15} />
          <View style={styles.separator} />
          <Spacer size={30} />
          <Text style={styles.text}>
            ¿Estás seguro de eliminar el producto {nameProduct}?
          </Text>
          <Spacer size={30} />
          <View style={styles.separator} />
          <Spacer size={20} />
          <Button label="Confirmar" color="yellow" onPress={onConfirm} />
          <Spacer size={10} />
          <Button label="Cancelar" onPress={onCancel} />
          <Spacer size={60} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, backgroundColor: '#00000055' },
  container: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
  },
  buttonClose: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: 18,
  },
  buttonIcon: { height: 20, width: 20 },
  separator: {
    backgroundColor: colors.gray1,
    height: 2,
  },
  text: {
    fontWeight: '500',
    fontSize: 15,
    color: '#00000088',
    alignSelf: 'center',
    width: '90%',
    textAlign: 'center',
  },
});
