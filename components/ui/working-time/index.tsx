import { FC } from 'react';
import { View } from 'react-native';

import { Paragraph } from '@Components/ui/typography';
import { ClockIcon } from '@Components/icons';

import { getTimeString } from '@Utils/functions';

import styles from './working-time.styles';

type WorkingTimeProps = {
  title: string;
  subtitle: string;
  from: string;
  to: string;
};
const WorkingTime: FC<WorkingTimeProps> = ({ title, subtitle, from, to }) => (
  <View style={styles.container}>
    <View style={styles.left}>
      <Paragraph style={styles.title} view="middle">
        {title}
      </Paragraph>

      <Paragraph view="small" color="gray">
        {subtitle}
      </Paragraph>
    </View>

    <View style={styles.right}>
      <ClockIcon />
      <Paragraph style={styles.time} view="middle">
        {getTimeString(from, false)}
        {' - '}
        {getTimeString(to, false)}
      </Paragraph>
    </View>
  </View>
);

export { WorkingTime };
