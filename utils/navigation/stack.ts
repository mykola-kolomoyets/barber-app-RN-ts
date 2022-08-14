import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp
} from '@react-navigation/native-stack';
import { Colors } from '@Utils/colors';

import { Screens } from './enums';
import { ScreenOptions, StackParamsList } from './types';

export const initialScreenProps: ScreenOptions<Screens> = {
  [Screens.businessInfo]: {},
  [Screens.onboarding]: {},
  [Screens.profile]: {},
  [Screens.selectTime]: {},
  [Screens.signUp]: {},
  [Screens.splash]: {},
  [Screens.welcome]: {}
};

export const initialStackNavigatorProps: NativeStackNavigationOptions = {
  headerShown: false,
  contentStyle: {
    backgroundColor: Colors.white
  }
};

export const useStackedNavigation = () =>
  useNavigation<NativeStackNavigationProp<StackParamsList>>();

export const useStackedRoute = <ScreenName extends Screens>() =>
  useRoute<RouteProp<StackParamsList, ScreenName>>();
