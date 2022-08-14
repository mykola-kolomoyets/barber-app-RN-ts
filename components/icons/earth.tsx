import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const EarthIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      d="M18.654 14.164a9.649 9.649 0 0 0 .975-4.247A9.77 9.77 0 0 0 12.392.495h-.047a9.731 9.731 0 0 0-8.803 2.016l-.122.112a9.74 9.74 0 0 0 6.459 17.044h.225a9.78 9.78 0 0 0 8.494-5.381l.056-.122Zm-.525-4.247a8.373 8.373 0 0 1-.516 2.878l-4.35-2.672a1.5 1.5 0 0 0-.59-.215l-2.138-.282a1.51 1.51 0 0 0-1.434.638h-.806l-.357-.74a1.519 1.519 0 0 0-1.03-.816l-.62-.132.235-.553a.76.76 0 0 1 .694-.46h1.509c.252 0 .5-.065.722-.187l1.144-.637c.1-.055.195-.121.28-.197l2.523-2.288a1.472 1.472 0 0 0 .422-1.584 8.25 8.25 0 0 1 4.312 7.247Zm-16.5 0a8.166 8.166 0 0 1 .89-3.722l.976 2.616a1.51 1.51 0 0 0 1.087.937l.516.113h.01l1.124.243a.732.732 0 0 1 .516.404l.197.412a1.51 1.51 0 0 0 1.35.844h.112l-.722 1.612a1.49 1.49 0 0 0 .263 1.632l1.51 1.63a.777.777 0 0 1 .187.648l-.17.871a8.26 8.26 0 0 1-7.846-8.24Z"
      fill="#15130B"
    />
  </Svg>
);

export { EarthIcon };
