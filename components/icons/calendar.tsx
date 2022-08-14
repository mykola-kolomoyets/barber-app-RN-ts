import React, { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const CalendarIcon: FC<SvgProps> = ({ fill, ...props }) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Path
      d="M20.12 4.667h-15a.75.75 0 0 0-.75.75v15c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75v-15a.75.75 0 0 0-.75-.75ZM17.12 3.167v3M8.12 3.167v3M4.37 9.167h16.5"
      stroke={fill}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export { CalendarIcon };
