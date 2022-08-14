import { StyleSheet } from 'react-native';

import { Colors } from '@Utils/colors';

export default StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 12,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: Colors.middleGray,

    borderRadius: 8
  },

  title: {
    width: '60%'
  }
});
