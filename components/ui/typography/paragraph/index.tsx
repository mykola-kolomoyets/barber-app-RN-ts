import React, { FC, ReactNode, useMemo } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_500Medium,
  Montserrat_600SemiBold
} from '@expo-google-fonts/montserrat';

import { WithChildren } from '@Utils/common';

import styles from './paragraph.styles';

export type ParagraphProps = WithChildren & {
  view: 'small' | 'middle' | 'large';
  color?: 'black' | 'white' | 'gold' | 'gray';
  bold?: boolean;
  uppercase?: boolean;
  centered?: boolean;
  light?: boolean;
  style?: StyleProp<TextStyle>;
};
const Paragraph: FC<ParagraphProps> = ({
  children,
  color,
  view,
  bold,
  style,
  light,
  centered,
  uppercase
}) => {
  const [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_300Light
  });

  const paragraphClasses = useMemo(() => {
    if (!fontsLoaded) return null;

    return [
      styles.paragraph,
      styles[`paragraph__color_${color || 'black'}`],
      styles[`paragraph__view_${view}`],
      ...(bold ? [styles.paragraph__bold] : []),
      ...(light ? [styles.paragraph__light] : []),
      ...(centered ? [styles.paragraph__centered] : []),
      ...(uppercase ? [styles.paragraph__uppercase] : [])
    ];
  }, [fontsLoaded, color, view, centered, light, uppercase, bold]);

  return <Text style={[paragraphClasses, style]}>{children}</Text>;
};

export { Paragraph };
