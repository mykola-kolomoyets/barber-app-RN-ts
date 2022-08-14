import { FC, useEffect, useState } from 'react';
import { View, SafeAreaView } from 'react-native';

import { Button, Condition, Input, Paragraph, Title } from '@Components/ui';

import { BusinessInfoValues } from '@Utils/common';
import { Screens, StackScreen } from '@Utils/navigation';

import styles from './business-info.styles';

const initialBusinessInfo: BusinessInfoValues = {
  ownerName: '',
  DBANumber: '',
  einNumber: ''
};

const BusinessInfoScreen: FC<StackScreen<Screens.businessInfo>> = ({
  navigation
}) => {
  const [hasDBA, setHasDBA] = useState(false);
  const [hasEIN, setHasEIN] = useState(false);

  const [businessInfo, setBusonessInfo] =
    useState<BusinessInfoValues>(initialBusinessInfo);

  const [businessInfoHelpers, setBusonessInfoHelpers] =
    useState<BusinessInfoValues>(initialBusinessInfo);

  const onHasDBAToggle = () => setHasDBA((prev) => !prev);
  const onHasEINToggle = () => setHasEIN((prev) => !prev);

  const setHelper = (name: keyof typeof initialBusinessInfo, title: string) =>
    setBusonessInfoHelpers((prev) => ({ ...prev, [name]: title }));

  const onSubmitPress = () => {
    const isOwnerNameValid = !!businessInfo.ownerName;
    const isDBANameValid = !hasDBA || !!businessInfo.DBANumber;
    const isEINNumberValid = !hasEIN || !!businessInfo.einNumber;

    if (!isOwnerNameValid) setHelper('ownerName', 'Enter valid name');
    if (!isDBANameValid) setHelper('DBANumber', 'Enter valid trade name');
    if (!isEINNumberValid) setHelper('einNumber', 'Enter valid EIN Number');

    if (!isOwnerNameValid || !isDBANameValid || !isEINNumberValid) return;

    navigation.navigate(Screens.selectTime);
  };
  const onBackPress = () => navigation.goBack();

  const onFieldChange = (
    name: keyof typeof initialBusinessInfo,
    value: string
  ) => {
    setBusonessInfo((prev) => ({ ...prev, [name]: value }));
    setHelper(name, '');
  };

  useEffect(() => {
    setHelper('DBANumber', '');
  }, [hasDBA]);

  useEffect(() => {
    setHelper('einNumber', '');
  }, [hasEIN]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.title}>
          <Title style={styles.title__text} view="big">
            Business info
          </Title>

          <Paragraph view="large">Tell us about your legal entity.</Paragraph>
        </View>

        <View style={styles.form}>
          <View style={styles.form__body}>
            <View style={styles.form__row}>
              <Input
                type="text"
                name="ownerName"
                label="Owner’s Name"
                onChange={onFieldChange}
                value={businessInfo.ownerName}
                helperText={businessInfoHelpers.ownerName}
              />
            </View>

            <View style={styles.form__row}>
              <Condition
                title="I have a Registered DBA or Trade Name"
                checked={hasDBA}
                onToggle={onHasDBAToggle}
              />
            </View>

            {hasDBA && (
              <View style={styles.form__row}>
                <Input
                  type="text"
                  name="DBANumber"
                  label="Registered DBA Name"
                  onChange={onFieldChange}
                  value={businessInfo.DBANumber}
                  helperText={businessInfoHelpers.DBANumber}
                />
              </View>
            )}

            <View style={styles.form__row}>
              <Condition
                title="I have an EIN number"
                checked={hasEIN}
                onToggle={onHasEINToggle}
              />
            </View>

            {hasEIN && (
              <View style={styles.form__row}>
                <Input
                  type="ein"
                  name="einNumber"
                  label="EIN Number"
                  onChange={onFieldChange}
                  value={businessInfo.einNumber}
                  helperText={businessInfoHelpers.einNumber}
                />
              </View>
            )}
          </View>

          <View style={styles.form__footer}>
            <Button view="primary" title="Next" onPress={onSubmitPress} />

            <Button view="ghost" title="Back" onPress={onBackPress} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export { BusinessInfoScreen };
