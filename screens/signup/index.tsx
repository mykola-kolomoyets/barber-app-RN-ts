import { FC, Fragment, useCallback, useEffect, useState } from 'react';
import { SafeAreaView, View, Pressable, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import { Title, Paragraph, Input, Button } from '@Components/ui';
import { Separator, BottomSheet } from '@Components/layout';

import { Screens, StackScreen } from '@Utils/navigation';

import styles from './signup.styles';

const SignUpScreen: FC<StackScreen<Screens.signUp>> = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneHelperText, setPhoneHelperText] = useState('');

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const onPhoneChange = (value: string) => setPhoneNumber(value);

  const onBottonSheetOpen = () => setIsBottomSheetOpen(true);

  const onBottomSheetClose = () => setIsBottomSheetOpen(false);

  const onSubmit = () => {
    if (phoneNumber.length !== 11)
      return setPhoneHelperText('Enter the full number');

    navigation.navigate(Screens.businessInfo);
  };

  const onBackClick = () => navigation.goBack();

  useEffect(() => {
    setPhoneHelperText('');
  }, [phoneNumber]);

  useFocusEffect(
    useCallback(() => {
      setPhoneNumber('');
    }, [])
  );

  return (
    <Fragment>
      <ScrollView style={styles.container}>
        <SafeAreaView>
          <StatusBar style="dark" />

          <View>
            <Pressable onPress={onBackClick}>
              <Ionicons name="chevron-back" size={36} color="black" />
            </Pressable>
          </View>

          <View style={styles.title}>
            <Title style={styles.title__text} view="big">
              Sign Up
            </Title>

            <View style={styles.subtitle}>
              <Paragraph view="large" color="black">
                Already have an account?
              </Paragraph>

              <Paragraph
                style={styles.subtitle__login}
                view="large"
                color="gold"
              >
                Log in
              </Paragraph>
            </View>
          </View>

          <Input
            type="phone"
            label="Your phone number"
            value={phoneNumber}
            onChange={onPhoneChange}
            helperText={phoneHelperText}
          />

          <View style={styles.submit}>
            <Button view="primary" title="Next" onPress={onSubmit} />

            <View style={styles.submit__conditions}>
              <Paragraph view="small" color="gray">
                By signing up, you agree to our
              </Paragraph>

              <Paragraph view="small" color="gold">
                Terms & Conditions
              </Paragraph>
            </View>
          </View>

          <Separator text="or" />

          <View style={styles.sheet_button}>
            <Button
              view="secondary"
              title="Learn about Plaid"
              onPress={onBottonSheetOpen}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
      <BottomSheet opened={isBottomSheetOpen} onClose={onBottomSheetClose} />
    </Fragment>
  );
};

export { SignUpScreen };
