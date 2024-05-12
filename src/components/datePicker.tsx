import React from 'react';
import {
  Modal,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import DateTimePicker, {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { Button } from './button';

export function DateIOSPicker({
  onChange,
  date = new Date(),
  isVisible = false,
  close,
}: {
  onChange: (event: DateTimePickerEvent, date?: Date | undefined) => void;
  date?: Date;
  isVisible: boolean;
  close: () => void;
}) {
  if (Platform.OS !== 'ios') {
    return null;
  }

  return (
    <Modal visible={isVisible} animationType="fade" transparent={true}>
      <TouchableOpacity
        onPressIn={close}
        activeOpacity={1}
        style={styles.container}>
        <TouchableWithoutFeedback>
          <View style={styles.buttonWrapper}>
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={'date'}
              onChange={onChange}
              display="inline"
              minimumDate={new Date()}
              themeVariant="light"
            />
            <Button label="Cerrar" onPress={close} />
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
}

export function openAndroidPicker({
  onChange,
  date = new Date(),
}: {
  onChange: (event: DateTimePickerEvent, date?: Date | undefined) => void;
  date?: Date;
}) {
  DateTimePickerAndroid.open({
    maximumDate: new Date(),
    value: date,
    onChange,
    mode: 'date',
    is24Hour: true,
  });
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000033',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    backgroundColor: 'white',
    zIndex: 1,
    width: '80%',
    padding: 20,
    borderRadius: 20,
    top: 50,
  },
});
