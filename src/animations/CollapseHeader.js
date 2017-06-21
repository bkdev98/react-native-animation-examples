import React, { Component } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Linking,
  Text,
  ScrollView,
} from 'react-native';

import Beansable from './assets/images/beansable.png';
import BackIcon from '../icons/BackIcon';
import OpenIcon from '../icons/OpenIcon';

class CollapseHeader extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Collapse Header',
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
    headerRight: <OpenIcon onPress={() => Linking.openURL('https://github.com/bkdev98/react-native-animation-examples/blob/master/src/animations/CollapseHeader.js')} />,
  })

  componentWillMount() {
    this.animated = new Animated.Value(0);
  }

  render() {
    const hideImageInterpolate = this.animated.interpolate({
      inputRange: [0, 150],
      outputRange: [50, 0],
      extrapolate: 'clamp',
    });

    const fontInterpolate = this.animated.interpolate({
      inputRange: [0, 150],
      outputRange: [15, 20],
    });

    const opacityInterpolate = this.animated.interpolate({
      inputRange: [0, 150],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    const collapseInterpolate = this.animated.interpolate({
      inputRange: [0, 150],
      outputRange: [30, 0],
      extrapolate: 'clamp',
    });

    const imageStyle = {
      width: hideImageInterpolate,
      height: hideImageInterpolate,
    };

    const titleStyle = {
      fontSize: fontInterpolate,
    };

    const fadeButtonStyle = {
      opacity: opacityInterpolate,
      height: collapseInterpolate,
    };

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Animated.Image source={Beansable} style={[styles.logoImage, imageStyle]} />
          <Animated.Text style={[styles.title, titleStyle]}>Beansable</Animated.Text>
          <Animated.View style={[styles.buttons, fadeButtonStyle]}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Articles</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Contact</Text>
            </View>
          </Animated.View>
        </View>
        <View style={styles.scrollView}>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { y: this.animated } } },
            ])}
          >
            <View style={styles.fakeContent}>
              <Text style={styles.fakeText}>top</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#F06292',
    alignItems: 'center',
    padding: 10,
  },
  logoImage: {
    width: 50,
    height: 50,
  },
  title: {
    color: 'rgba(255,255,255,.8)',
    fontSize: 15,
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'rgba(255,255,255,.5)',
    fontSize: 15,
  },
  scrollView: {
  },
  fakeContent: {
    padding: 20,
    height: 800,
    alignItems: 'center',
  },
  fakeText: {
    fontSize: 25,
    color: '#F8BBD0',
  },
});

export default CollapseHeader;
