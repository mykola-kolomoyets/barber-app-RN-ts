import React, { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const ScissorsIcon: FC<SvgProps> = ({ fill, ...props }) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Path
      d="M6.245 10.667a2.625 2.625 0 1 0 0-5.25 2.625 2.625 0 0 0 0 5.25ZM6.245 20.417a2.625 2.625 0 1 0 0-5.25 2.625 2.625 0 0 0 0 5.25ZM13.37 12.917 8.412 16.31M22.37 6.759l-6.343 4.34M22.37 19.075 8.412 9.525"
      stroke={fill}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export { ScissorsIcon };
