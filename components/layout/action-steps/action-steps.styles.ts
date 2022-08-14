import { StyleSheet } from 'react-native';

import { Colors } from '@Utils/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'column'
  },

  step: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: 12,
    borderRadius: 8,
    marginBottom: 8
  },

  step__title: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  step__title_text: {
    marginLeft: 12
  },

  step__active: {
    backgroundColor: Colors.transparentGold
  }
});
