import { StyleSheet } from 'react-native';

import { Colors } from '@Utils/colors';

export default StyleSheet.create({
  wrapper: {
    flex: 1
  },

  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20
  },

  profile__head: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100
  },

  profile__head_person: {
    width: '100%',
    position: 'absolute',
    bottom: -32,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',

    paddingHorizontal: 16
  },

  profile__head_left: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },

  profile__head_title: {
    marginBottom: 4
  },

  profile__head_rating_icon: {
    transform: [{ scale: 0.8 }]
  },

  profile__head_subtitle: {
    padding: 0,

    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  profile__head_image: {},

  profile__head_data: {
    flexDirection: 'column',
    justifyContent: 'flex-start',

    marginLeft: 20
  },
  profile__head_write: {},

  image: {
    width: '100%',
    height: 315
  },

  like_button: {
    padding: 10,

    borderRadius: 40,

    backgroundColor: Colors.transparentWhite
  },

  profile__location_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  profile__location: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  profile__location__title: {
    marginTop: 4,
    marginBottom: 10
  },

  profile__book: {
    marginTop: 48,
    marginBottom: 60
  },

  book__addon: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  book__left_addon_title: {
    marginLeft: 8
  },

  book__right_addon_title: {
    marginRight: 8
  }
});
