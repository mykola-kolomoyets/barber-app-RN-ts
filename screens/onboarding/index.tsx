import { FC, useState } from 'react';
import { View, ImageBackground, SafeAreaView } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { StatusBar } from 'expo-status-bar';

import { Paragraph, Title, ProgressSteps, Button } from '@Components/ui';
import { ActionSteps } from '@Components/layout';
import {
  ScissorsIcon,
  AccountIcon,
  CalendarIcon,
  LightningIcon,
  LogoIcon
} from '@Components/icons';

import { Screens, StackScreen } from '@Utils/navigation';

import { backgroundImage, titles } from './onboarding.constants';

import styles from './onboarding.styles';

const icons: FC<SvgProps>[] = [
  AccountIcon,
  ScissorsIcon,
  CalendarIcon,
  LightningIcon
];

const OnboardingScreen: FC<StackScreen<Screens.onboarding>> = ({
  navigation
}) => {
  const [activeStep, setActiveStep] = useState(1);

  const onPreviewAppPress = () => navigation.navigate(Screens.profile);

  const onStepPress = (index: number) => setActiveStep(index);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ImageBackground style={styles.background} source={backgroundImage}>
        <SafeAreaView style={styles.inner}>
          <View style={styles.logo}>
            <LogoIcon />
          </View>

          <View style={styles.content}>
            <Title
              style={styles.content__title}
              view="large"
              color="white"
              centered
            >
              You’re in!
            </Title>

            <View>
              <View style={styles.content__up}>
                <Paragraph view="middle" bold centered>
                  25% of your Barber setup is completed
                </Paragraph>

                <View style={styles.content__up_steps}>
                  <ProgressSteps
                    steps={['Account', 'Work', 'Schedule', 'Services']}
                    activeStep={activeStep}
                  />
                </View>

                <Paragraph view="small" centered>
                  Finish the following Steps to complete set-up
                </Paragraph>

                <View style={styles.content__up_actions}>
                  <ActionSteps
                    onPress={onStepPress}
                    {...{ titles, activeStep, icons }}
                  />
                </View>
              </View>

              <View style={styles.content__bottom}>
                <Paragraph
                  style={styles.content__bottom_title}
                  view="middle"
                  centered
                  light
                >
                  or skip ahead and
                </Paragraph>

                <Button
                  view="outlined"
                  title="Preview The App"
                  onPress={onPreviewAppPress}
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export { OnboardingScreen };
