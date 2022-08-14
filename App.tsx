import { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';

import { Navigator } from '@Navigation';


export default function App() {
  return (
    <Fragment>
      <StatusBar style="inverted" />

      <Navigator />
    </Fragment>
  );
}

AppRegistry.registerComponent('barber', () => App);