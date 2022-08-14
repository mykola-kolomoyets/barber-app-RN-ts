import { FC, ReactNode, useMemo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { buttonColors } from '@Components/ui/button';

import styles from './button-with-addons.styles';

type ButtonWithAddonProps = {
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  view: 'primary' | 'secondary' | 'outlined' | 'ghost';
  onPress: () => void;
};

const ButtonWithAddons: FC<ButtonWithAddonProps> = ({
  leftAddon,
  rightAddon,
  view,
  onPress
}) => {
  const buttonClasses = useMemo(
    () => [styles.button, styles[`button__${view}`]],
    [view]
  );

  const gradientColors = buttonColors[view];

  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        style={buttonClasses}
        colors={gradientColors}
        start={[0, 1]}
        end={[1, 0]}
      >
        {leftAddon && <View style={styles.left_addon}>{leftAddon}</View>}

        {rightAddon && <View style={styles.right_addon}>{rightAddon}</View>}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export { ButtonWithAddons };
