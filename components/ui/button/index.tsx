import { FC, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Paragraph } from '@Components/ui/typography';

import { Colors } from '@Utils/colors';

import styles from './button.styles';

export const buttonColors = {
  primary: [Colors.gold, Colors.darkGold],
  secondary: [Colors.black, Colors.black],
  outlined: [Colors.lightGold, Colors.lightGold],
  ghost: [Colors.white, Colors.white]
};

export const whiteTextButtonTypes = ['primary', 'secondary'];

type ButtonProps = {
  title: string;
  view: 'primary' | 'secondary' | 'outlined' | 'ghost';
  onPress: () => void;
};

const Button: FC<ButtonProps> = ({ title, view, onPress }) => {
  const buttonClasses = useMemo(
    () => [styles.button, styles[`button__${view}`]],
    [view]
  );

  const isPrimaryButton = useMemo(() => view === 'primary', [view]);

  const textColor = whiteTextButtonTypes.includes(view) ? 'white' : 'black';

  const gradientColors = buttonColors[view];

  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        style={buttonClasses}
        colors={gradientColors}
        start={[0, 1]}
        end={[1, 0]}
      >
        <Paragraph view="large" color={textColor} bold={isPrimaryButton}>
          {title}
        </Paragraph>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export { Button };
