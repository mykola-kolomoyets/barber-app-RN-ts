import { FC } from 'react';
import { View } from 'react-native';

import { Paragraph, WorkingTime } from '@Components/ui';

import styles from './working-hours.styles';

const workingTimes = [
  {
    title: 'Weekdays',
    subtitle: 'Mon, Wed, Thu',
    from: '09:00',
    to: '20:00'
  },
  {
    title: 'Weekends',
    subtitle: 'Fri, Sat, Sun',
    from: '10:00',
    to: '18:00'
  }
];

const WorkingHours: FC = () => (
  <View>
    <Paragraph style={styles.title} view="small" color="gold" uppercase bold>
      Working hours
    </Paragraph>

    <View style={styles.hours}>
      {workingTimes.map((time) => (
        <WorkingTime key={time.title} {...time} />
      ))}
    </View>
  </View>
);

export { WorkingHours };
