import React, { FC } from 'react';
import Svg, { Rect, Path, SvgProps } from 'react-native-svg';

const GoldCheckboxIcon: FC<SvgProps> = (props) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Rect
      x={0.62}
      y={0.917}
      width={24}
      height={24}
      rx={4}
      fill="#CB9D54"
      fillOpacity={0.75}
    />
    <Path
      d="m19.495 8.542-8.75 8.75-4.375-4.375"
      stroke="#FFFCF8"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export { GoldCheckboxIcon };
