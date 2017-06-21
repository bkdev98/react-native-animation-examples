import React, { Component } from 'react';
import {
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Linking,
} from 'react-native';

import BackIcon from '../icons/BackIcon';
import OpenIcon from '../icons/OpenIcon';

class MagicInput extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Magic Input',
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
    headerRight: <OpenIcon onPress={() => Linking.openURL('https://github.com/bkdev98/react-native-animation-examples/blob/master/src/animations/MagicInput.js')} />,
  })

  state = {
    animated: new Animated.Value(0),
    success: false,
  }

  handlePress = () => {
    Animated.timing(this.state.animated, {
      toValue: 1,
      duration: 300,
    }).start();
  }

  handleSend = () => {
    this.setState({
      success: true,
    }, () => {
      Animated.sequence([
        Animated.timing(this.state.animated, {
          toValue: 0,
          duration: 300,
        }),
        Animated.delay(1500),
      ]).start(() => this.setState({ success: false }));
    });
  }

  render() {
    const widthInterpolate = this.state.animated.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [150, 150, 300],
      extrapolate: 'clamp',
    });

    const inputScaleInterpolate = this.state.animated.interpolate({
      inputRange: [0, 0.5, 0.6],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp',
    });

    const sendButtonInterpolate = this.state.animated.interpolate({
      inputRange: [0, 0.6, 1],
      outputRange: [0, 0, 1],
    });

    const notifyTextScaleInterpolate = this.state.animated.interpolate({
      inputRange: [0, 0.5],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    const thankyouScaleInterpolate = this.state.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    });

    const thankYouTextStyle = {
      transform: [
        {
          scale: thankyouScaleInterpolate,
        },
      ],
    };

    const inputScaleStyle = {
      transform: [
        { scale: inputScaleInterpolate },
      ],
    };

    const buttonWrapStyle = {
      width: widthInterpolate,
    };

    const sendButtonStyle = {
      transform: [
        { scale: sendButtonInterpolate },
      ],
    };

    const notifyTextStyle = {
      transform: [
        { scale: notifyTextScaleInterpolate },
      ],
    };

    const { animated, success } = this.state;

    return (
      <View style={[StyleSheet.absoluteFill, styles.container]}>
        <TouchableWithoutFeedback style={styles.touchWF} onPress={this.handlePress}>
          <Animated.View style={[styles.buttonWrap, buttonWrapStyle, styles.center]}>
            {!success &&
              <Animated.View style={[styles.sendContainer, inputScaleStyle]}>
                <TextInput
                  autoFocus
                  keyboardType="email-address"
                  placeholder="Email"
                  placeholderTextColor="#F06292"
                  placeholderTextStyle={styles.placeholderText}
                  style={styles.textInput}
                />
                <TouchableOpacity style={[styles.sendButton, styles.center, sendButtonStyle]} onPress={this.handleSend}>
                  <Text style={styles.sendText}>Send</Text>
                </TouchableOpacity>
              </Animated.View>
            }

            {!success && <Animated.View style={[styles.center, notifyTextStyle]}>
              <Text style={styles.notifyText}>Notify Me</Text>
            </Animated.View>}
            {success && <Animated.View style={[styles.center, thankYouTextStyle]}>
              <Text style={styles.notifyText}>Thank You</Text>
            </Animated.View>}
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
    backgroundColor: '#F06292',
  },
  touchWF: {
    borderRadius: 25,
  },
  buttonWrap: {
    position: 'absolute',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
  },
  sendContainer: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInput: {
    left: 10,
    width: 212,
    fontSize: 16,
    color: '#F06292',
  },
  placeholderText: {
    fontSize: 16,
    color: '#F06292',
  },
  sendButton: {
    width: 80,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F06292',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendText: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 16,
  },
  notifyText: {
    position: 'absolute',
    color: '#F06292',
    fontWeight: '700',
    backgroundColor: 'transparent',
  },
});

export default MagicInput;
