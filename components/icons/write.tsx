import React, { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const WriteIcon: FC<SvgProps> = (props) => (
  <Svg width={24} height={25} fill="none" {...props}>
    <Path
      d="m7.252 19.843-3.02 2.538A.75.75 0 0 1 3 21.807V6.917a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75H7.734a.75.75 0 0 0-.482.176Z"
      stroke="#FFFCF8"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export { WriteIcon };
