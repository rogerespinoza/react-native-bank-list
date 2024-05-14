import { StyleSheet } from 'react-native';
import { colors } from '../../common';

type ColorButton = 'yellow' | 'red' | 'blue';

export const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    borderRadius: 3,
    borderColor: colors.yellow1,
    backgroundColor: colors.yellow1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  buttonColorYellow: {
    borderColor: colors.yellow1,
    backgroundColor: colors.yellow1,
  },
  buttonColorBlue: {
    borderColor: colors.blue1,
    backgroundColor: colors.blue1,
  },
  buttonColorRed: {
    borderColor: 'red',
    backgroundColor: 'red',
  },
  textColorWhite: {
    color: 'white',
  },
  textColorBlack: {
    color: 'black',
  },
  text: {
    fontWeight: '500',
    fontSize: 13,
  },
});

export const colorBG = (_color: ColorButton) => {
  switch (_color) {
    case 'blue':
      return styles.buttonColorBlue;
    case 'red':
      return styles.buttonColorRed;
    case 'yellow':
      return styles.buttonColorYellow;
  }
};

export const colorText = (_color: ColorButton) => {
  switch (_color) {
    case 'blue':
      return styles.textColorBlack;
    case 'red':
      return styles.textColorWhite;
    case 'yellow':
      return styles.textColorBlack;
  }
};
