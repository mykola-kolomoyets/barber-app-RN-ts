import { ReactNode, FC } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';

import { Title, Paragraph } from '@Components/ui';

import styles from './horizontal-slider.styles';

type HorizontalSLiderProps = {
  title: string;
  onViewAllClick?: () => void;
  children: ReactNode;
};
const HorizontalSlider: FC<HorizontalSLiderProps> = ({
  title,
  children,
  onViewAllClick
}) => (
  <View>
    <View style={styles.title}>
      <Title view="middle">{title}</Title>

      {onViewAllClick && (
        <TouchableOpacity onPress={onViewAllClick}>
          <Paragraph view="small" color="gold">
            View All
          </Paragraph>
        </TouchableOpacity>
      )}
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {children}
    </ScrollView>
  </View>
);

export { HorizontalSlider };
