import { StyleSheet } from 'react-native';

import { Colors } from '@Utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 90,
    paddingHorizontal: 14,
    paddingVertical: 8
  },

  button: {
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 4
  },

  button__active: {
    borderColor: Colors.gold,

    backgroundColor: Colors.gold
  }
});
