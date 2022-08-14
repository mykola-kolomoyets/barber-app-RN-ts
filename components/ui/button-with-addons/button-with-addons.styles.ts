import { StyleSheet } from 'react-native';

import { Colors } from '@Utils/colors';

export default StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 12,

    height: 56,

    borderRadius: 8,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  button__primary: {},

  button__secondary: {},

  button__ghost: {},

  button__outlined: {
    borderWidth: 1,
    borderColor: Colors.gold
  },

  left_addon: {},

  right_addon: {}
});
