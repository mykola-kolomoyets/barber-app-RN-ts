import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const DropdownArrowIcon = (props: SvgProps) => (
  <Svg width={14} height={7} fill="none" {...props}>
    <Path
      d="M13.025.449a.562.562 0 0 0-.52-.345H1.254A.562.562 0 0 0 .733.45a.59.59 0 0 0 .12.619l5.625 5.625a.577.577 0 0 0 .801 0l5.625-5.625a.591.591 0 0 0 .12-.62Z"
      fill="#15130B"
    />
  </Svg>
);

export { DropdownArrowIcon };
