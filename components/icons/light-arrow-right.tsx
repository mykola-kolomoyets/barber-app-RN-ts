import React, { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const LightArrowRightIcon: FC<SvgProps> = ({ fill, ...props }) => (
  <Svg width={17} height={17} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m11.588 8.349-4.8-4.8a.802.802 0 0 0-1.136 1.136l4.24 4.232-4.232 4.232a.772.772 0 0 0-.24.568.802.802 0 0 0 1.368.568l4.8-4.8a.797.797 0 0 0 .232-.568.797.797 0 0 0-.232-.568Z"
      fill={fill}
    />
  </Svg>
);

export { LightArrowRightIcon };
