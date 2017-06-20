import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Linking,
} from 'react-native';

import BackIcon from '../icons/BackIcon';
import OpenIcon from '../icons/OpenIcon';
import Heart from './components/heart';

class BouncingHeart extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Bouncing Heart',
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
    headerRight: <OpenIcon onPress={() => Linking.openURL('https://github.com/bkdev98/react-native-animation-examples/blob/master/src/animations/BouncingHeart.js')} />,
  })

  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      scale: new Animated.Value(0),
      animations: [
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
      ],
    };
  }

  triggerLike = () => {
    this.setState({
      liked: !this.state.liked,
    });
    Animated.spring(this.state.scale, {
      toValue: 2,
      friction: 3,
    }).start(() => {
      this.state.scale.setValue(0);
    });
  }

  render() {
    const bouncyHeart = this.state.scale.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [1, 0.8, 1],
    });

    const heartButtonStyle = {
      transform: [
        { scale: bouncyHeart },
      ],
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.triggerLike}>
          <Animated.View style={heartButtonStyle}>
            <Heart filled={this.state.liked} />
          </Animated.View>
        </TouchableWithoutFeedback>
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
});

export default BouncingHeart;
