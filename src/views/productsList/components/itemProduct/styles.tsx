import { StyleSheet } from 'react-native';

const BORDER_WRAPPER = 1.5;
const BORDER_COLOR = '#E0E5F0';

export const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
  },
  itemBorderHorizontal: {
    borderColor: BORDER_COLOR,
    borderLeftWidth: BORDER_WRAPPER,
    borderRightWidth: BORDER_WRAPPER,
  },
  itemBorderVerticalTop: {
    borderColor: BORDER_COLOR,
    borderTopWidth: BORDER_WRAPPER,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  itemBorderVerticalDown: {
    borderColor: BORDER_COLOR,
    borderBottomWidth: BORDER_WRAPPER,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  itemSeparator: {
    height: 2,
    backgroundColor: BORDER_COLOR,
    width: '98%',
    alignSelf: 'center',
  },
});
