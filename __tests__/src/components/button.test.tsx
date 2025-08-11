import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Button } from '../../../src/components';

describe('Button', () => {
  const handlePress = jest.fn();

  it('renders primary button correctly', () => {
    const { getByText } = render(
      <Button label="Press Me 1" onPress={handlePress} />,
    );
    expect(getByText('Press Me 1')).toBeTruthy();
  });

  it('renders secondary button correctly', () => {
    const { getByText } = render(
      <Button label="Press Me 2" onPress={handlePress} />,
    );
    expect(getByText('Press Me 2')).toBeTruthy();
  });

  it('renders secondary button correctly 2', () => {
    const { getByText } = render(
      <Button label="Press Me 2" onPress={handlePress} />,
    );
    expect(getByText('Press Me 2')).toBeTruthy();
  });

  it('renders third button correctly', () => {
    const { getByText } = render(
      <Button label="Press Me 2" onPress={handlePress} />,
    );
    expect(getByText('Press Me 2')).toBeTruthy();
  });

  it('triggers onPress when pressed', () => {
    const { getByText } = render(
      <Button label="Press Me" onPress={handlePress} />,
    );

    fireEvent.press(getByText('Press Me'));
    expect(handlePress).toHaveBeenCalled();
  });
});
