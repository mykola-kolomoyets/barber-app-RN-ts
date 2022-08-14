import { FC } from 'react';
import { View } from 'react-native';

import { Paragraph } from '@Components/ui/typography';
import { Switch } from '@Components/ui/switch';

import styles from './condition.styles';

type ConditionProps = {
  title: string;
  checked: boolean;
  onToggle: () => void;
};
const Condition: FC<ConditionProps> = ({ title, ...switchProps }) => (
  <View style={styles.container}>
    <Paragraph style={styles.title} view="large" bold>
      {title}
    </Paragraph>

    <Switch {...switchProps} />
  </View>
);

export { Condition };
