import React, { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const ClockIcon: FC<SvgProps> = (props) => (
  <Svg width={20} height={21} fill="none" {...props}>
    <Path
      d="M10 18.417a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
      stroke="#CB9D54"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 6.542v4.375h4.375"
      stroke="#CB9D54"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export { ClockIcon };
