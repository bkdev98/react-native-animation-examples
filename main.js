import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AnimatedBasic from './src/AnimatedBasic';
import Button from './src/Button';
import Card from './src/Card';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card />
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
