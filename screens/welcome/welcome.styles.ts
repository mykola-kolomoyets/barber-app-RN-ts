import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1
  },

  content: {
    position: 'absolute',
    bottom: 0,

    paddingVertical: 40,

    flexDirection: 'column',
    justifyContent: 'space-between',

    width: width,
    height: height / 2,

    backgroundColor: '#ffffff',

    paddingHorizontal: 15
  },

  content__text: {
    width: width * 0.8
  },

  content__title: {
    width: '80%',
    marginBottom: 16
  },

  content__signup: {},

  content__signup_subtitle: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'center'
  },

  content__signup_login: {
    marginLeft: 8
  }
});
