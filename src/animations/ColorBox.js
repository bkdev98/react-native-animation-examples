import React, { Component } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Linking,
} from 'react-native';

import BackIcon from '../icons/BackIcon';
import OpenIcon from '../icons/OpenIcon';

class ColorBox extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Color Box',
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
    headerRight: <OpenIcon onPress={() => Linking.openURL('https://github.com/bkdev98/react-native-animation-examples/blob/master/src/animations/ColorBox.js')} />,
  })

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 150,
      duration: 1500,
    }).start();
  }

  render() {
    const interpolateColor = this.animatedValue.interpolate({
      inputRange: [0, 150],
      outputRange: ['#FCE4EC', '#E91E63'],
    });

    const animatedStyle = {
      backgroundColor: interpolateColor,
      transform: [
        { translateY: this.animatedValue },
      ],
    };

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]} />
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
  box: {
    width: 100,
    height: 100,
  },
});

export default ColorBox;
