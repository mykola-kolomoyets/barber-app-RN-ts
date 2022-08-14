import { FC } from 'react';
import { Switch as SwitchComponent, View } from 'react-native';

import { Colors } from '@Utils/colors';

const trackColor = {
  false: Colors.gray,
  true: Colors.gold
};

type SwitchProps = {
  checked: boolean;
  onToggle: () => void;
};
const Switch: FC<SwitchProps> = ({ checked, onToggle }) => (
  <View>
    <SwitchComponent
      trackColor={trackColor}
      thumbColor={checked ? Colors.white : Colors.gray}
      ios_backgroundColor={Colors.lightGray}
      value={checked}
      onValueChange={onToggle}
    />
  </View>
);

export { Switch };
