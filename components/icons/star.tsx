import React, { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const StarIcon: FC<SvgProps> = (props) => (
  <Svg width={14} height={15} fill="none" {...props}>
    <Path
      d="M7.241 11.348 10 13.095c.353.223.79-.109.686-.52L9.888 9.44a.479.479 0 0 1 .155-.486l2.474-2.058c.325-.27.157-.81-.26-.837l-3.23-.21a.46.46 0 0 1-.397-.292L7.425 2.523a.455.455 0 0 0-.85 0L5.37 5.557a.46.46 0 0 1-.396.292l-3.23.21c-.418.027-.586.566-.26.837l2.473 2.058a.479.479 0 0 1 .155.486l-.74 2.907c-.125.494.4.893.824.625l2.563-1.624a.45.45 0 0 1 .482 0Z"
      fill="#CB9D54"
      stroke="#CB9D54"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export { StarIcon };
