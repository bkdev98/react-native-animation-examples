import React, { Component } from 'react';
import {
  Text,
  View,
  Animated,
  PanResponder,
  StyleSheet,
} from 'react-native';

import BackIcon from '../icons/BackIcon';

class MagicCard extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Magic Card',
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
  })

  componentWillMount() {
    this.animatedValue = new Animated.ValueXY();
    this._value = { x: 0, y: 0 };
    this.animatedValue.addListener((value) => this._value = value);
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (e, gestureState) => {
        this.animatedValue.setOffset({
          x: this._value.x,
          y: this._value.y,
        });
        this.animatedValue.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event([
        null,
        { dx: this.animatedValue.x, dy: this.animatedValue.y },
      ]),
      onPanResponderRelease: (e, gestureState) => {
        this.animatedValue.flattenOffset();
        Animated.decay(this.animatedValue, {
          deceleration: 0.997,
          velocity: { x: gestureState.vx, y: gestureState.vy },
        }).start();
      },
    });
  }
  render() {
    const animatedStyle = {
      transform: this.animatedValue.getTranslateTransform(),
    };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]} {...this.panResponder.panHandlers}>
          <Text style={styles.text}>Drag Me</Text>
        </Animated.View>
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
    backgroundColor: '#D81B60',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});

export default MagicCard;
