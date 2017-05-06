import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AnimatedBasic from './src/AnimatedBasic';
import Button from './src/Button';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
