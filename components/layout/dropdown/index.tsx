import { DropDownItem } from '@Utils/common';
import { FC, useState } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';

import { Paragraph } from '@Components/ui/typography';
import { DropdownArrowIcon, EarthIcon } from '@Components/icons';

import styles from './dropdown.styles';

type DropdownProps = {
  items: DropDownItem[];
  onSelect: (item: DropDownItem) => void;
  activeItem: DropDownItem;
};
const Dropdown: FC<DropdownProps> = ({ items, onSelect, activeItem }) => {
  const [opened, setOpened] = useState(false);

  const onDropdownToggle = () => setOpened((prev) => !prev);

  const onDropDownItemPress = (item: DropDownItem) => {
    setOpened(false);

    onSelect(item);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdown__container}
        onPress={onDropdownToggle}
      >
        <View style={styles.dropdown__title}>
          <EarthIcon />

          <Paragraph style={styles.dropdown__title_text} view="middle">
            {activeItem.name}
          </Paragraph>
        </View>

        <View style={[opened && styles.dropdown__icon_rotated]}>
          <DropdownArrowIcon />
        </View>
      </TouchableOpacity>

      {opened && (
        <View style={styles.dropdown__items}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {items.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.dropdown__item,
                  activeItem.id === item.id && styles.dropdown__item_active
                ]}
                onPress={() => onDropDownItemPress(item)}
              >
                <Paragraph view="middle">{item.name}</Paragraph>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export { Dropdown };
