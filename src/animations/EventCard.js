import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Linking,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import BackIcon from '../icons/BackIcon';
import OpenIcon from '../icons/OpenIcon';

import Unsplash from './assets/images/4.jpeg';

class EventCard extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Event Card',
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
    headerRight: <OpenIcon onPress={() => Linking.openURL('https://github.com/bkdev98/react-native-animation-examples/blob/master/src/animations/EventCard.js')} />,
  })

  state = {
    open: false,
  }

  componentWillMount() {
    this.animated = new Animated.Value(0);
  }

  toggleCard = () => {
    this.setState((state) => ({
      open: !state.open,
    }), () => {
      const toValue = this.state.open ? 1 : 0;
      Animated.timing(this.animated, {
        toValue,
        duration: 500,
      }).start();
    });
  }

  render() {
    const offsetInterplate = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [191, 0],
    });

    const arrowRotate = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: ['180deg', '0deg'],
    });

    const offsetStyle = {
      transform: [
        {
          translateY: offsetInterplate,
        },
      ],
    };

    const arrowStyle = {
      transform: [
        {
          rotate: arrowRotate,
        },
      ],
    };

    const opacityStyle = {
      opacity: this.animated,
    };

    return (
      <View style={styles.container}>
        <Image source={Unsplash} resizeMode="cover" style={styles.background}>
          <Animated.View style={[styles.card, offsetStyle]}>
            <TouchableOpacity onPress={this.toggleCard}>
              <View style={styles.header}>
                <View>
                  <Text style={styles.title}>Lets Get It On</Text>
                  <Text style={styles.description}>Marvin Gaye</Text>
                </View>
                <View style={styles.arrowContainer}>
                  <Animated.Text style={[styles.arrow, arrowStyle]}>↓</Animated.Text>
                </View>
              </View>
            </TouchableOpacity>
            <Animated.View style={[styles.scrollViewWrap, opacityStyle]}>
              <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.contentText}>
                  Don't you know how sweet and wonderful life can be?
                  I'm askin' you baby to get it on with me, oh oh
                  I ain't gonna worry, I ain't gonna push
                  I won't push you baby
                  So come on, come on, come on, come on baby
                  Stop beatin' round the bush, hey
                  Let's get it on, let's get it on
                  You know what I'm talkin' 'bout
                  Come on baby, let your love come out
                  If you believe in love
                  Let's get it on, let's get it on baby
                  This minute, oh yeah let's get it on
                  Please, let's get it on
                  I know you know what I been dreamin' of, don't you baby?
                  My whole body makes that feelin' of love, I'm happy
                  I ain't gonna worry, no I ain't gonna push
                  I won't push you baby, woo
                </Text>
              </ScrollView>
            </Animated.View>
          </Animated.View>
        </Image>
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
  background: {
    width: 300,
    height: 250,
    borderRadius: 3,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'white',
  },
  scrollViewWrap: {
    flex: 1,
    paddingTop: 5,
  },
  contentText: {
    fontSize: 16,
    color: 'rgba(0,0,0,.5)',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 4,
    transform: [{
      translateY: 191,
    }],
  },
  scrollView: {
    marginTop: 15,
  },
  header: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 23,
    color: '#F06292',
  },
  description: {
    fontSize: 17,
    color: '#F48FB1',
  },
  arrowContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  arrow: {
    fontSize: 18,
    color: '#F48FB1',
  },
});

export default EventCard;
