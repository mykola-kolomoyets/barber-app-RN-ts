import { FC } from 'react';
import { TouchableOpacity } from 'react-native';

import { Paragraph } from '@Components/ui/typography';

import styles from './badge.styles';

type BadgeProps = {
  title: string;
  isActive: boolean;
  onPress: () => void;
};
const Badge: FC<BadgeProps> = ({ isActive, title, onPress }) => (
  <TouchableOpacity
    style={[styles.container, isActive && styles.container__active]}
    onPress={onPress}
  >
    <Paragraph view="small" color={isActive ? 'white' : 'black'}>
      {title}
    </Paragraph>
  </TouchableOpacity>
);

export { Badge };
