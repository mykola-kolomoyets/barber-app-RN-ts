import { StyleSheet } from 'react-native';

import { Colors } from '@Utils/colors';

export default StyleSheet.create({
  button: {
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  button__primary: {},

  button__secondary: {},

  button__ghost: {},

  button__outlined: {
    borderWidth: 1,
    borderColor: Colors.gold
  }
});
