import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
  Linking,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

class Info extends Component {
  componentWillMount() {
    this.animate = new Animated.Value(0);
  }

  render() {
    return (
      <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center' }]}>
        <TouchableWithoutFeedback style={StyleSheet.absoluteFill} onPress={() => this.props.onPress()}>
          <View style={[styles.infoOverlay]} />
        </TouchableWithoutFeedback>

        <Animated.View style={styles.container}>
          <View style={styles.infoContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Animations Collection</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.createdBy}>Created by Quoc Khanh</Text>
              <Text style={styles.description}>& React Native 💖</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://facebook.com/bkdev98')}
            >
              <Text style={styles.buttonText}>CONTACT</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height: height * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    // flex: 1,
    width: width * 0.8,
    height: 250,
  },
  infoOverlay: {
    position: 'absolute',
    flex: 1,
    height,
    width,
    backgroundColor: 'rgba(0,0,0,.4)',
  },
  titleContainer: {
    flex: 4,
    backgroundColor: '#F06292',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: 'white',
  },
  contentContainer: {
    flex: 3,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  createdBy: {
    fontSize: 20,
    color: '#616161',
  },
  description: {
    fontSize: 20,
    color: '#F06292',
  },
  button: {
    flex: 3,
    backgroundColor: '#F8BBD0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#EC407A',
    fontSize: 17,
    letterSpacing: 1.4,
    fontWeight: 'bold',
  },
});

export default Info;
