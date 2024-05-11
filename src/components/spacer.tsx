import React from 'react';
import { DimensionValue, View } from 'react-native';

type Direction = 'horizontal' | 'vertical';

export default function Spacer({
  orientation = 'vertical',
  size = undefined,
}: {
  orientation?: Direction;
  size?: DimensionValue | undefined;
}) {
  return <View style={styleResponsive(size, orientation)} />;
}

const styleResponsive = (
  size?: DimensionValue | undefined,
  direction?: Direction,
) => {
  const styleFlex = !size ? 1 : 0;
  const styleBase = { flex: styleFlex };
  const horizontalStyle = { width: size, ...styleBase };
  const verticalStyle = { height: size, ...styleBase };

  return direction === 'vertical' ? verticalStyle : horizontalStyle;
};
