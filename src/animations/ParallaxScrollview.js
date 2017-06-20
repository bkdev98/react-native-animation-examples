import React, { Component } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  ScrollView,
  Dimensions,
  Linking,
} from 'react-native';

import BackIcon from '../icons/BackIcon';
import OpenIcon from '../icons/OpenIcon';
import Moment from './components/moment';

const { width, height } = Dimensions.get('window');

const Images = [
  {
    title: 'Saling',
    image: require('./assets/images/1.jpeg'),
  }, {
    title: 'Lets Get It On',
    image: require('./assets/images/2.jpg'),
  }, {
    title: 'All Right',
    image: require('./assets/images/3.jpeg'),
  }, {
    title: 'Viva La Vida',
    image: require('./assets/images/4.jpeg'),
  },
];

const getInterpolate = (animatedScroll, i, imageLength) => {
  const inputRange = [
    (i - 1) * width,
    i * width,
    (i + 1) * width,
  ];

  const outputRange = i === 0 ? [0, 0, 150] : [-300, 0, 150];
  return animatedScroll.interpolate({
    inputRange,
    outputRange,
    extrapolate: 'clamp',
  });
};

const getSeparator = (i) => (<View
  key={i}
  style={[styles.separate, { left: (i - 1) * width - 2.5 }]}
/>);

class ParallaxScrollview extends Component {
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
    headerRight: <OpenIcon onPress={() => Linking.openURL('https://github.com/bkdev98/react-native-animation-examples/blob/master/src/animations/ParallaxScrollview.js')} />,
  })

  constructor(props) {
    super(props);
    this.state = {
      animatedScroll: new Animated.Value(0),
      scrollEnabled: true,
    };
  }

  handleFocus = (focused) => {
    this.setState({
      scrollEnabled: !focused,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          pagingEnabled
          horizontal
          scrollEventThrottle={16}
          scrollEnabled={this.state.scrollEnabled}
          onScroll={
            Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.state.animatedScroll,
                  },
                },
              },
            ])
          }
        >
          {Images.map((image, i) => (
            <Moment
              key={image.title}
              {...image}
              translateX={getInterpolate(this.state.animatedScroll, i, Images.length)}
              onFocus={this.handleFocus}
              focused={!this.state.scrollEnabled}
            />
          ))}
          {Array(...{ length: Images.length + 1 }).map((_, i) => getSeparator(i))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height,
    width,
    overflow: 'hidden',
  },
  separate: {
    backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 5,
  },
});

export default ParallaxScrollview;
