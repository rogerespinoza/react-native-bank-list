import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { FinancialProduct } from '../../../src/domain';
import { ListItem } from '../../../src/components/molecules/listItem';

describe('Button', () => {
  const handlePress = jest.fn();

  it('renders primary button correctly', () => {
    const { getByText } = render(
      <ListItem
        index={0}
        lenght={10}
        product={productEmpy}
        onPress={handlePress}
      />,
    );
    expect(getByText('Name test')).toBeTruthy();
  });

  it('triggers onPress when pressed', () => {
    const { getByText } = render(
      <ListItem
        index={0}
        lenght={10}
        product={productEmpy}
        onPress={handlePress}
      />,
    );

    fireEvent.press(getByText('Name test'));
    expect(handlePress).toHaveBeenCalled();
  });
});

const currentDate = new Date();
const TIMESTAMP_ONE_YEAR = 31536000000;

const productEmpy: FinancialProduct = {
  id: '101010',
  name: 'Name test',
  description: '',
  logo: '',
  date_release: currentDate,
  date_revision: new Date(currentDate.getTime() + TIMESTAMP_ONE_YEAR),
};
