import { StyleSheet } from 'react-native';

import { Colors } from '@Utils/colors';

export default StyleSheet.create({
  container: {
    position: 'relative'
  },

  steps: {
    zIndex: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  step: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  step__number: {
    width: 24,
    height: 24,

    marginBottom: 8,

    borderRadius: 24,
    borderWidth: 1,
    borderColor: Colors.gold,

    backgroundColor: Colors.lightGold,

    justifyContent: 'center',
    alignItems: 'center'
  },

  step__completed__number: {
    backgroundColor: Colors.gold
  },

  step__active__number: {},

  step__separators: {
    paddingHorizontal: 20,
    position: 'absolute',
    marginTop: 12,
    flex: 1,
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  step__separator: {
    flex: 1,
    height: 2,
    backgroundColor: Colors.lightGray
  },

  step__separator_filled: {
    backgroundColor: Colors.gold
  }
});
