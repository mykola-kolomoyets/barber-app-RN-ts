import { StyleSheet } from 'react-native';

import { Colors } from '@Utils/colors';

export default StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 12,

    backgroundColor: Colors.middleGray,

    borderRadius: 8,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  left: {},

  title: {},

  right: {
    flexDirection: 'row'
  },

  amount: {
    marginRight: 24
  }
});
