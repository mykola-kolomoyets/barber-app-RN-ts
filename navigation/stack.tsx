import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BackIcon } from '@Components/icons';

import {
  initialScreenProps,
  initialStackNavigatorProps,
  ScreenOptions,
  StackParamsList,
  Screens
} from '@Utils/navigation';

import {
  SplashScreen,
  WelcomeScreen,
  SignUpScreen,
  BusinessInfoScreen,
  SelectTimeScreen,
  OnboardingScreen,
  ProfileScreen
} from '@Screens';

export const Stack = createNativeStackNavigator<StackParamsList>();

export const screens = {
  [Screens.splash]: SplashScreen,
  [Screens.welcome]: WelcomeScreen,
  [Screens.signUp]: SignUpScreen,
  [Screens.businessInfo]: BusinessInfoScreen,
  [Screens.selectTime]: SelectTimeScreen,
  [Screens.onboarding]: OnboardingScreen,
  [Screens.profile]: ProfileScreen
};

const StackNavigator: FC = () => {
  const screenOptions: ScreenOptions<Screens> = {
    [Screens.splash]: {
      ...initialScreenProps[Screens.splash]
    },
    [Screens.welcome]: {
      ...initialScreenProps[Screens.welcome]
    },
    [Screens.businessInfo]: {
      ...initialScreenProps[Screens.businessInfo]
    },
    [Screens.onboarding]: {
      ...initialScreenProps[Screens.onboarding]
    },
    [Screens.profile]: ({ navigation }) => ({
      ...initialScreenProps[Screens.profile],
      headerShown: true,
      headerTransparent: true,
      headerBackVisible: false,
      headerTitle: '',
      hideWhenScrolling: true,

      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
      )
    }),
    [Screens.selectTime]: {
      ...initialScreenProps[Screens.selectTime]
    },
    [Screens.signUp]: {
      ...initialScreenProps[Screens.signUp]
    }
  };

  return (
    <Stack.Navigator screenOptions={initialStackNavigatorProps}>
      {Object.entries(screens).map(([name, component]) => (
        <Stack.Screen
          key={name}
          {...{
            name: name as Screens,
            component,
            options: screenOptions[name as Screens]
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export { StackNavigator };
