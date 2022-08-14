import React, { FC, useMemo } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import {
  useFonts,
  PlayfairDisplay_900Black
} from '@expo-google-fonts/playfair-display';

import styles from './title.styles';

type TitleProps = {
  view?: 'small' | 'middle' | 'big' | 'large';
  color?: 'black' | 'white';
  children: string;
  centered?: boolean;
  style?: StyleProp<TextStyle>;
};
const Title: FC<TitleProps> = ({ children, color, style, view, centered }) => {
  const [fontsLoaded] = useFonts({ PlayfairDisplay_900Black });

  const titleClasses = useMemo(() => {
    if (!fontsLoaded) return null;

    return [
      styles.title,
      styles[`title__view_${view || 'large'}`],
      ...(color === 'white' ? [styles.title_white] : []),
      ...(centered ? [styles.title__centered] : [])
    ];
  }, [fontsLoaded, view, color]);

  return <Text style={[titleClasses, style]}>{children?.toUpperCase()}</Text>;
};

export { Title };
