import { FC } from 'react';
import { View } from 'react-native';

import { Screens, StackScreen } from '@Utils/navigation';

import { Title, Paragraph, Button } from '@Components/ui';
import { PhotoGrid } from '@Components/layout';

import styles from './welcome.styles';

const WelcomeScreen: FC<StackScreen<Screens.welcome>> = ({ navigation }) => {
  const onSignUpPress = () => navigation.navigate(Screens.signUp);

  return (
    <View style={styles.container}>
      <View>
        <PhotoGrid />
      </View>

      <View style={styles.content}>
        <View style={styles.content__text}>
          <Title style={styles.content__title}>Welcome to guile</Title>

          <Paragraph view="large">
            One liner that explains what Guile is, what we offer, and how we can
            help.
          </Paragraph>
        </View>

        <View style={styles.content__signup}>
          <Button title="Sign up" view="primary" onPress={onSignUpPress} />

          <View style={styles.content__signup_subtitle}>
            <Paragraph view="large" color="black">
              Already have an account?
            </Paragraph>

            <Paragraph
              style={styles.content__signup_login}
              view="large"
              color="gold"
            >
              Log in
            </Paragraph>
          </View>
        </View>
      </View>
    </View>
  );
};

export { WelcomeScreen };
