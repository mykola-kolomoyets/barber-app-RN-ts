import { FC, Fragment } from 'react';
import { View } from 'react-native';

import { Paragraph } from '@Components/ui/typography';

import styles from './progress-steps.styles';

type ProgressStepsProps = {
  steps: string[];
  activeStep: number;
};
const ProgressSteps: FC<ProgressStepsProps> = ({ steps, activeStep }) => (
  <View style={styles.container}>
    <View style={styles.steps}>
      {steps.map((step, index) => (
        <View key={step} style={styles.step}>
          <View
            style={[
              styles.step__number,
              index < activeStep && styles.step__completed_number,
              index === activeStep && styles.step__active_number
            ]}
          >
            <Paragraph
              view="small"
              color={index < activeStep ? 'white' : 'black'}
              centered
            >
              {`${index + 1}`}
            </Paragraph>
          </View>

          <Paragraph
            view="small"
            color={index === activeStep ? 'gold' : 'black'}
            centered
          >
            {step}
          </Paragraph>
        </View>
      ))}
    </View>

    <View style={styles.step__separators}>
      {steps.map(
        (step, index) =>
          index !== steps.length - 1 && (
            <View
              key={step}
              style={[
                styles.step__separator,
                index <= activeStep - 1 && styles.step__separator_filled
              ]}
            />
          )
      )}
    </View>
  </View>
);

export { ProgressSteps };
