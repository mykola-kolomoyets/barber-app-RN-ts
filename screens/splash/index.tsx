import { FC, useEffect } from 'react';
import { SafeAreaView, View, Image } from 'react-native';

import { Screens, StackScreen } from '@Utils/navigation';

import styles from './splash.styles';

const Logo = require('@Assets/images/Logo.png');

const SplashScreen: FC<StackScreen<Screens.splash>> = ({ navigation }) => {
  const navigateToWelcomeScreen = () => {
    return setTimeout(() => {
      navigation.replace(Screens.welcome);
    }, 3000);
  };

  useEffect(() => {
    const timeout = navigateToWelcomeScreen();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.image} source={Logo} />
      </View>
    </SafeAreaView>
  );
};

export { SplashScreen };
