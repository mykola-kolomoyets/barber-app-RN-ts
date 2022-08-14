import { StyleSheet } from 'react-native';

import { Colors } from '@Utils/colors';

export default StyleSheet.create({
  container: {
    position: 'relative'
  },

  dropdown__title: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },

  dropdown__title_text: {
    marginHorizontal: 16
  },

  dropdown__container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8
  },

  dropdown__items: {
    maxHeight: 150,

    borderRadius: 8,

    overflow: 'hidden'
  },

  dropdown__item: {
    paddingVertical: 12,
    paddingHorizontal: 8,

    backgroundColor: Colors.middleGray
  },

  dropdown__item_active: {
    backgroundColor: Colors.lightGray
  },

  dropdown__icon_rotated: {
    transform: [{ rotate: '180deg' }]
  }
});
