import { FC } from 'react';
import { View } from 'react-native';

import { Paragraph } from '@Components/ui/typography';
import { LightCheckBoxIcon } from '@Components/icons';

import { Advantage } from '@Utils/common';

import styles from './advantage-list-item.styles';

const AdvantageListItem: FC<Advantage> = ({ title, subtitle }) => (
  <View style={styles.container}>
    <View style={styles.icon}>
      <LightCheckBoxIcon />
    </View>

    <View style={styles.content}>
      <Paragraph style={styles.title} view="large" bold>
        {title}
      </Paragraph>
      <Paragraph view="middle" color="gray">
        {subtitle}
      </Paragraph>
    </View>
  </View>
);

export { AdvantageListItem };
