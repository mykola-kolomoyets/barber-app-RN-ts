import { FC } from 'react';
import { Pressable } from 'react-native';

import { Paragraph } from '@Components/ui/typography';

import styles from './time-pick.styles';

type TimePickProps = {
  title: string;
  isActive: boolean;
  onPress: () => void;
};
const TimePick: FC<TimePickProps> = ({ title, isActive, onPress }) => (
  <Pressable
    style={[styles.container, styles.button, isActive && styles.button__active]}
    onPress={onPress}
  >
    <Paragraph view="small" color={isActive ? 'white' : 'black'} centered>
      {title}
    </Paragraph>
  </Pressable>
);

export { TimePick };
