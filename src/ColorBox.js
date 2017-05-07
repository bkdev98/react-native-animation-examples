import React, { Component } from 'react';
import {
  View,
  Text,
  Animated
} from 'react-native';

class ColorBox extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 150,
      duration: 1500
    }).start()
  }

  render() {
    const interpolateColor = this.animatedValue.interpolate({
      inputRange: [0, 150],
      outputRange: ['#FCE4EC', '#E91E63'],
    });

    const animatedStyle = {
      backgroundColor: interpolateColor,
      transform: [
        { translateY: this.animatedValue }
      ]
    }

    return (
      <Animated.View style={[styles.box, animatedStyle]} />
    );
  }
}

styles = {
  box: {
    width: 100,
    height: 100,
  }
}

export default ColorBox;