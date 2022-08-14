import { FC } from 'react';
import { View } from 'react-native';

import { Paragraph } from '@Components/ui';

import styles from './separator.styles';

type SeparatorProps = {
  text?: string;
};
const Separator: FC<SeparatorProps> = ({ text }) => {
  return text ? (
    <View style={[styles.container, styles.with_text]}>
      <View style={styles.with_text_line} />

      <Paragraph style={styles.text} view="small" light>
        {text}
      </Paragraph>

      <View style={styles.with_text_line} />
    </View>
  ) : (
    <View style={[styles.container, styles.empty]} />
  );
};

export { Separator };
