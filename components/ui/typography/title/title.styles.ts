import { StyleSheet } from 'react-native';

import { Colors } from '@Utils/colors';

export default StyleSheet.create({
  title: {
    fontFamily: 'PlayfairDisplay_900Black',

    color: Colors.black
  },

  title_white: {
    color: Colors.white
  },

  title__view_large: {
    fontSize: 40
  },

  title__view_big: {
    fontSize: 32
  },

  title__view_middle: {
    fontSize: 24
  },

  title__view_small: {
    fontSize: 16
  },

  title_centered: {
    textAlign: 'center'
  }
});
