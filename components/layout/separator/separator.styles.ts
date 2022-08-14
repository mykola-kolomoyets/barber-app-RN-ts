import { StyleSheet } from 'react-native';

import { Colors } from '@Utils/colors';

export default StyleSheet.create({
  container: {
    marginVertical: 40
  },

  with_text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  with_text_line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.lightGray
  },

  text: {
    marginHorizontal: 8
  },

  empty: {
    width: '100%',
    height: 1,

    backgroundColor: Colors.lightGray
  }
});
