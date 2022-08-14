import { StyleSheet } from 'react-native';

import { Colors } from '@Utils/colors';

export default StyleSheet.create({
  container: {
    maxWidth: 260,

    padding: 16,
    marginRight: 8,

    backgroundColor: Colors.middleGray,

    borderRadius: 8
  },

  text: {
    marginBottom: 16
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },

  image: {
    marginRight: 12
  },

  metadata: {
    flexDirection: 'column'
  },

  stars: {
    flexDirection: 'row'
  },

  author: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 6
  },

  author__name: {
    marginRight: 8
  }
});
