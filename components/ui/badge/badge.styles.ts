import { StyleSheet } from 'react-native';

import { Colors } from '@Utils/colors';

export default StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 14,

    backgroundColor: Colors.white,

    borderWidth: 1,
    borderColor: Colors.middleGray,
    borderRadius: 24,

    marginRight: 6
  },

  container__active: {
    borderColor: Colors.gold,
    backgroundColor: Colors.gold
  }
});
