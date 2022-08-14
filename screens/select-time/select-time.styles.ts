import { StyleSheet } from 'react-native';

import { Colors } from '@Utils/colors';

export default StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 16
  },

  title: {
    marginBottom: 12
  },

  dropdown: {
    marginBottom: 22
  },

  form: {
    flex: 1
  },

  form__row: {
    marginBottom: 22
  },

  time_picker: {
    paddingHorizontal: 38,
    paddingVertical: 32,

    borderRadius: 8,

    backgroundColor: Colors.lightGold
  },

  time_picker__title: {
    marginBottom: 16
  }
});
