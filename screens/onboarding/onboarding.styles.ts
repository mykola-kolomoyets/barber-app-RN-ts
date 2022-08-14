import { StyleSheet } from 'react-native';

import { Colors } from '@Utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1
  },

  logo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },

  background: {
    flex: 1
  },

  inner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  content: {
    padding: 24
  },

  content__title: {
    marginBottom: 28
  },

  content__up: {
    padding: 16,

    marginBottom: 16,

    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.gold,

    backgroundColor: Colors.lightGold
  },

  content__up_steps: {
    marginVertical: 16
  },

  content__up_actions: {
    marginTop: 8
  },

  content__bottom: {},

  content__bottom_title: {
    marginBottom: 16
  }
});
