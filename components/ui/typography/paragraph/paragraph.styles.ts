import { StyleSheet } from 'react-native';

import { Colors } from '@Utils/colors';

// 12 14 16

export default StyleSheet.create({
  paragraph: {
    fontFamily: 'Montserrat_500Medium'
  },

  paragraph__bold: {
    fontFamily: 'Montserrat_600SemiBold'
  },

  paragraph__light: {
    fontFamily: 'Montserrat_300Light'
  },

  paragraph__centered: {
    textAlign: 'center'
  },

  paragraph__uppercase: {
    textTransform: 'uppercase',
    letterSpacing: 1.16
  },

  paragraph__view_small: {
    fontSize: 12,
    lineHeight: 14
  },
  paragraph__view_middle: {
    fontSize: 14,
    lineHeight: 24
  },
  paragraph__view_large: {
    fontSize: 16
  },

  paragraph__color_black: {
    color: Colors.black
  },

  paragraph__color_white: {
    color: Colors.white
  },

  paragraph__color_gold: {
    color: Colors.gold
  },

  paragraph__color_gray: {
    color: Colors.gray
  }
});
