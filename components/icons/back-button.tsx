import React, { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const BackIcon: FC<SvgProps> = (props) => (
  <Svg width={24} height={25} fill="none" {...props}>
    <Path
      d="m15 20.417-7.5-7.5 7.5-7.5"
      stroke="#FFFCF8"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export { BackIcon };
