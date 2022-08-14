import { FC } from "react";
import { View } from 'react-native';
import SegmentedControlTab from "react-native-segmented-control-tab";

import { Colors } from "@Utils/colors";

type TabsProps = {
  values: string[],
  selectedIndex: number;
  onTabPress: (index: number) => void;
}
const Tabs: FC<TabsProps> = (props) => (
  <View>
    <SegmentedControlTab
      borderRadius={8}
      tabsContainerStyle={{
        backgroundColor: Colors.middleGray,
        borderRadius: 8,
      }}
      tabStyle={{
        backgroundColor: Colors.middleGray,
        borderWidth: 0,
        paddingVertical: 8,
      }}
      activeTabStyle={{
        borderRadius: 8,
        backgroundColor: Colors.gold
      }}
      tabTextStyle={{
        color: Colors.black
      }}
      {...props}
    />
  </View>
);

export { Tabs };