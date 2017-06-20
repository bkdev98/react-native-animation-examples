import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  Linking,
} from 'react-native';

import BackIcon from '../icons/BackIcon';
import OpenIcon from '../icons/OpenIcon';

class AnimatedBasic extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Animated Basic',
    headerStyle: {
      height: 80,
      backgroundColor: '#EC407A',
      justifyContent: 'center',
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,
      fontWeight: '400',
    },
    headerLeft: <BackIcon onPress={() => navigation.goBack()} />,
    headerRight: <OpenIcon onPress={() => Linking.openURL('https://github.com/bkdev98/react-native-animation-examples/blob/master/src/animations/AnimatedBasic.js')} />,
  })

  componentWillMount() {
    this.animatedValue = new Animated.Value(100);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 150,
      duration: 3000,
      easing: Easing.bounce,
    }).start();
  }

  render() {
    const animatedStyle = { height: this.animatedValue };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.root, animatedStyle]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    width: 100,
    height: 100,
    backgroundColor: '#b1bb',
  },
});

export default AnimatedBasic;
