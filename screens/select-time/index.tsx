import { FC, useState, useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';

import { Screens, StackScreen } from '@Utils/navigation';

import { Condition, Paragraph, TimePick, Title, Button } from '@Components/ui';
import { Grid, Tabs, Dropdown } from '@Components/layout';

import { getTimeString } from '@Utils/functions';
import { DropDownItem } from '@Utils/common';

import { availableSlots, periods, timeZones } from './select-time.constants';

import styles from './select-time.styles';

const SelectTimeScreen: FC<StackScreen<Screens.selectTime>> = ({
  navigation
}) => {
  const [is24HoursFormat, setIs24HoursFormat] = useState(false);

  const [period, setPeriod] = useState(0);
  const [activeTime, setActiveTime] = useState(0);

  const [timezone, setTimezone] = useState<DropDownItem>(timeZones[0]);

  const onTimePress = (index: number) => setActiveTime(index);

  const onIs24HoursFormatToggle = () => setIs24HoursFormat((prev) => !prev);

  const onSubmit = () => navigation.navigate(Screens.onboarding);

  const onTimeZoneSelect = (item: DropDownItem) => setTimezone(item);

  const isActive = (item: string) => {
    const currentPeriodTimes =
      availableSlots[periods[period] as keyof typeof availableSlots];

    const currentTime = currentPeriodTimes[activeTime];

    return currentTime === item;
  };

  useEffect(() => {
    setActiveTime(0);
  }, [period]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title style={styles.title} view="middle">
          Select time
        </Title>

        <View style={styles.dropdown}>
          <Dropdown
            items={timeZones}
            onSelect={onTimeZoneSelect}
            activeItem={timezone}
          />
        </View>

        <View style={styles.form}>
          <View style={styles.form__row}>
            <Condition
              title="24 hour format"
              checked={is24HoursFormat}
              onToggle={onIs24HoursFormatToggle}
            />
          </View>

          <View style={styles.form__row}>
            <Tabs
              values={periods}
              selectedIndex={period}
              onTabPress={setPeriod}
            />
          </View>

          <View style={[styles.form__row, styles.time_picker]}>
            <Paragraph style={styles.time_picker__title} view="large" centered>
              Slots available on Friday, May 16
            </Paragraph>

            <Grid
              columns={3}
              data={
                availableSlots[periods[period] as keyof typeof availableSlots]
              }
              renderItem={({ item, index }) => (
                <TimePick
                  title={getTimeString(item, is24HoursFormat)}
                  isActive={isActive(item)}
                  onPress={() => onTimePress(index)}
                />
              )}
              keyExtractor={(item) => item}
            />
          </View>
        </View>

        <View>
          <Button view="primary" title="Submit" onPress={onSubmit} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export { SelectTimeScreen };
