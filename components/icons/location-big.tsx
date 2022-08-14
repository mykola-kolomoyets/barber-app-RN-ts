import React, { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const LocationBigIcon: FC<SvgProps> = (props) => (
  <Svg width={24} height={25} fill="none" {...props}>
    <Path
      d="M5.25 22.667h13.5M12 13.667a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      stroke="#15130B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.5 10.667c0 6.75-7.5 12-7.5 12s-7.5-5.25-7.5-12a7.5 7.5 0 1 1 15 0v0Z"
      stroke="#15130B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export { LocationBigIcon };
