import React from 'react';
import { render } from '@testing-library/react-native';
import { Label } from '../../../src/components';

describe('Button', () => {
  it('renders label by label', () => {
    const { getByText } = render(<Label label="Label" text="Text" />);
    expect(getByText('Label')).toBeTruthy();
  });

  it('renders label by text', () => {
    const { getByText } = render(<Label label="Label" text="Text" />);
    expect(getByText('Text')).toBeTruthy();
  });
});
