import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Linking,
  Text,
  Dimensions,
} from 'react-native';

import BackIcon from '../icons/BackIcon';
import OpenIcon from '../icons/OpenIcon';

const { width, height } = Dimensions.get('window');

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
};

class FloatingHeart extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Floating Heart',
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
    headerRight: <OpenIcon onPress={() => Linking.openURL('https://github.com/bkdev98/react-native-animation-examples/blob/master/src/animations/FloatingHeart.js')} />,
  })

  state = {
    hearts: [],
  }

  handleAddHeart = () => {
    const animation = new Animated.Value(0);
    this.setState((state) => ({
      hearts: [
        ...state.hearts,
        {
          animation,
          start: getRandomInt(100, width - 100),
        },
      ],
    }), () => {
      Animated.timing(animation, {
        toValue: height,
        duration: 3000,
      }).start();
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>touch touch</Text>
        <TouchableWithoutFeedback onPress={this.handleAddHeart}>
          <View style={StyleSheet.absoluteFill}>
            {
              this.state.hearts.map(({ animation, start }, index) => {
                const positionInterpolate = animation.interpolate({
                  inputRange: [0, height],
                  outputRange: [height - 50, 0],
                });

                const opacityInterpolate = animation.interpolate({
                  inputRange: [0, height - 200],
                  outputRange: [1, 0],
                });

                const scaleInterpolate = animation.interpolate({
                  inputRange: [0, 15, 30],
                  outputRange: [0, 1.2, 1],
                  extrapolate: 'clamp',
                });

                const dividedHeight = height / 6;
                const wobbleInterpolate = animation.interpolate({
                  inputRange: [
                    0,
                    dividedHeight * 1,
                    dividedHeight * 2,
                    dividedHeight * 3,
                    dividedHeight * 4,
                    dividedHeight * 5,
                    dividedHeight * 6,
                  ],
                  outputRange: [
                    0,
                    15,
                    -15,
                    15,
                    -15,
                    15,
                    -15,
                  ],
                  extrapolate: 'clamp',
                });

                const heartStyle = {
                  left: start,
                  transform: [
                    { translateY: positionInterpolate },
                    { translateX: wobbleInterpolate },
                    { scale: scaleInterpolate },
                  ],
                  opacity: opacityInterpolate,
                };
                return <Heart key={index} style={heartStyle} />;
              })
            }
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const Heart = ({ style }) => (
  <Animated.View style={[styles.heart, style]}>
    <View style={[styles.heartShape, styles.leftHeart]} />
    <View style={[styles.heartShape, styles.rightHeart]} />
  </Animated.View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#F8BBD0',
    backgroundColor: 'transparent',
    fontSize: 30,
  },
  heart: {
    width: 50,
    height: 50,
    position: 'absolute',
  },
  heartShape: {
    width: 30,
    height: 45,
    position: 'absolute',
    top: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#E91E63',
  },
  leftHeart: {
    transform: [{ rotate: '-45deg' }],
    left: 5,
  },
  rightHeart: {
    transform: [{ rotate: '45deg' }],
    right: 5,
  },
});

export default FloatingHeart;
