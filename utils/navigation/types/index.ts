import { FunctionComponent } from 'react';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
  NativeStackScreenProps
} from '@react-navigation/native-stack';

import { Screens } from '../enums';

export type StackParamsList = {
  [Screens.businessInfo]: undefined;
  [Screens.onboarding]: undefined;
  [Screens.profile]: undefined;
  [Screens.selectTime]: undefined;
  [Screens.signUp]: undefined;
  [Screens.splash]: undefined;
  [Screens.welcome]: undefined;
};

export type ScreensList = {
  [key in Screens]: FunctionComponent | FunctionComponent<StackScreen<key>>;
};

export type ScreenProps<T extends Screens> = {
  navigation: NativeStackNavigationProp<StackParamsList, T>;
};

export type ScreenOptions<T extends Screens> = {
  [key in T]:
    | NativeStackNavigationOptions
    | ((props: ScreenProps<key>) => NativeStackNavigationOptions);
};

export type StackScreen<ScreenName extends Screens> = NativeStackScreenProps<
  StackParamsList,
  ScreenName
>;
