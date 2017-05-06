import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Easing
} from 'react-native';

class AnimatedBasic extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(100);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 150,
      duration: 3000,
      easing: Easing.bounce
    }).start()
  }

  render() {
    const animatedStyle = { height: this.animatedValue }
    return (
      <Animated.View style={[ styles.root, animatedStyle ]}>

      </Animated.View>
    );
  }
}

const styles = {
  root: {
    width: 100,
    height: 100,
    backgroundColor: '#b1bb'
  }
}

export default AnimatedBasic;