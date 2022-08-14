import React, { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const ArrowRightIcon: FC<SvgProps> = (props) => (
  <Svg width={20} height={21} fill="none" {...props}>
    <Path
      d="M3.125 10.917h13.75M11.25 5.292l5.625 5.625-5.625 5.625"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export { ArrowRightIcon };
