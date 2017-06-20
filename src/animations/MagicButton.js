import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
  Linking,
} from 'react-native';

import BackIcon from '../icons/BackIcon';
import OpenIcon from '../icons/OpenIcon';

class MagicButton extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Magic Button',
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
    headerRight: <OpenIcon onPress={() => Linking.openURL('https://github.com/bkdev98/react-native-animation-examples/blob/master/src/animations/MagicButton.js')} />,
  })

  constructor(props) {
    super(props);

    this.handlePressIn = this.handlePressIn.bind(this);
    this.handlePressOut = this.handlePressOut.bind(this);
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(1);
  }

  handlePressIn() {
    Animated.spring(this.animatedValue, {
      toValue: 0.5,
    }).start();
  }

  handlePressOut() {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
    }).start();
  }

  render() {
    const animatedStyle = {
      transform: [{ scale: this.animatedValue }],
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPressIn={this.handlePressIn}
          onPressOut={this.handlePressOut}
        >
          <Animated.View style={[styles.button, animatedStyle]}>
            <Text style={styles.text}>Press Me</Text>
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
  button: {
    backgroundColor: '#9C27B0',
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    color: '#fff',
  },
});

export default MagicButton;
