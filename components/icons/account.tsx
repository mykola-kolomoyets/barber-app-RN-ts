import React, { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const AccountIcon: FC<SvgProps> = ({ fill, ...props }) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Path
      d="M12.62 15.917a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
      stroke={fill}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.526 21.166a10.504 10.504 0 0 1 18.19 0"
      stroke={fill}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export { AccountIcon };
