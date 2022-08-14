import * as React from 'react';
import Svg, { Rect, Path, SvgProps } from 'react-native-svg';

const LightCheckBoxIcon = (props?: SvgProps) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Rect
      x={0.754}
      y={0.875}
      width={23.25}
      height={23.25}
      rx={2.625}
      fill="#CB9D54"
      fillOpacity={0.24}
    />
    <Path
      d="m17.879 9-7 7-3.5-3.5"
      stroke="#CB9D54"
      strokeWidth={1.125}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Rect
      x={0.754}
      y={0.875}
      width={23.25}
      height={23.25}
      rx={2.625}
      stroke="#CB9D54"
      strokeWidth={0.75}
    />
  </Svg>
);

export { LightCheckBoxIcon };
