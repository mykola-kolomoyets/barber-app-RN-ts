import React, { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const LightningIcon: FC<SvgProps> = ({ fill, ...props }) => (
  <Svg
    width={props.width || 25}
    height={props.height || 25}
    fill="none"
    {...props}
  >
    <Path
      d="m9.62 23.416 1.5-7.5-6-2.25 10.5-11.25-1.5 7.5 6 2.25-10.5 11.25Z"
      stroke={fill}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export { LightningIcon };
