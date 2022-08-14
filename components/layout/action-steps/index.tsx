import { FC } from 'react';
import { Pressable, View } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { Colors } from '@Utils/colors';

import { Paragraph, ParagraphProps } from '@Components/ui';
import { GoldCheckboxIcon, LightArrowRightIcon } from '@Components/icons';

import styles from './action-steps.styles';

type ActionStepsProps = {
  titles: string[];
  icons: FC<SvgProps>[];
  activeStep: number;
  onPress: (index: number) => void;
};

const ActionSteps: FC<ActionStepsProps> = ({
  titles,
  icons,
  activeStep,
  onPress
}) => (
  <View style={styles.container}>
    {titles.map((title, index) => {
      const Icon = icons[index];

      const isCompleted = index < activeStep;
      const isActive = index === activeStep;

      let textColor: ParagraphProps['color'] = 'gray';

      if (isCompleted) textColor = 'gold';
      if (isActive) textColor = 'black';

      return (
        <Pressable
          key={title}
          style={[styles.step, isActive && styles.step__active]}
          onPress={() => onPress(index)}
        >
          <View style={styles.step__title}>
            {Icon && (
              <Icon
                fill={isActive || isCompleted ? Colors.gold : Colors.gray}
              />
            )}

            <Paragraph
              style={styles.step__title_text}
              view="large"
              bold={isActive}
              color={textColor}
            >
              {title}
            </Paragraph>
          </View>

          <View>
            {isCompleted ? (
              <GoldCheckboxIcon />
            ) : (
              <LightArrowRightIcon
                fill={isActive ? Colors.gold : Colors.gray}
              />
            )}
          </View>
        </Pressable>
      );
    })}
  </View>
);

export { ActionSteps };
