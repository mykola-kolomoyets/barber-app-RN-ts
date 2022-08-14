import { FC } from 'react';
import { View } from 'react-native';

import { Paragraph } from '@Components/ui/typography';
import { GoldCheckboxIcon } from '@Components/icons';

import { FilterItem } from '@Utils/common';

import styles from './service-item.styles';

const ServiceItem: FC<FilterItem> = ({ title, subtitle, amount }) => (
  <View style={styles.container}>
    <View style={styles.left}>
      <Paragraph style={styles.title} view="middle">
        {title}
      </Paragraph>

      <Paragraph view="small" color="gray" light>
        {subtitle}
      </Paragraph>
    </View>

    <View style={styles.right}>
      <Paragraph style={styles.amount} view="middle">
        ${amount}
      </Paragraph>

      <GoldCheckboxIcon />
    </View>
  </View>
);

export { ServiceItem };
