import React, { Component } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Linking,
  ScrollView,
  Text,
  TextInput,
  PanResponder,
} from 'react-native';

import BackIcon from '../icons/BackIcon';
import OpenIcon from '../icons/OpenIcon';

class CommentModal extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Comment Modal',
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
    headerRight: <OpenIcon onPress={() => Linking.openURL('https://github.com/bkdev98/react-native-animation-examples/blob/master/src/animations/CommentModal.js')} />,
  })

  componentWillMount() {
    this.animated = new Animated.Value(0);
    this.animatedMargin = new Animated.Value(0);
    this.scrollOffset = 0;
    this.contentHeight = 0;
    this.scrollViewHeight = 0;

    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        const { dy } = gestureState;
        const totalScrollHeight = this.scrollOffset + this.scrollViewHeight;

        if (
          (this.scrollOffset <= 0 && dy > 0) ||
          ((totalScrollHeight >= this.contentHeight) && dy < 0)
        ) return true;
      },
      onPanResponderMove: (e, gestureState) => {
        const { dy } = gestureState;
        if (dy < 0) {
          this.animated.setValue(dy);
        } else if (dy > 0) {
          this.animatedMargin.setValue(dy);
        }
      },
      onPanResponderRelease: (e, gestureState) => {
        const { dy } = gestureState;

        if (dy < -150) {
          Animated.parallel([
            Animated.timing(this.animated, {
              toValue: -550,
              duration: 150,
            }),
            Animated.timing(this.animatedMargin, {
              toValue: 0,
              duration: 150,
            }),
          ]).start();
        } else if (dy > -150 && dy < 150) {
          Animated.parallel([
            Animated.timing(this.animated, {
              toValue: 0,
              duration: 150,
            }),
            Animated.timing(this.animatedMargin, {
              toValue: 0,
              duration: 150,
            }),
          ]).start();
        } else if (dy > 150) {
          Animated.timing(this.animated, {
            toValue: 550,
            duration: 300,
          }).start();
        }
      },
    });
  }

  render() {
    const spacerStyle = {
      marginTop: this.animatedMargin,
    };

    const opacityInterpolate = this.animated.interpolate({
      inputRange: [-500, 0, 500],
      outputRange: [0, 1, 0],
    });

    const modalStyle = {
      transform: [
        { translateY: this.animated },
      ],
      opacity: opacityInterpolate,
    };

    return (
      <View style={styles.container}>
        <Animated.View style={spacerStyle} />
        <Animated.View
          style={[styles.modal, modalStyle]}
          {...this.panResponder.panHandlers}
        >
          <View style={styles.comments}>
            <ScrollView
              scrollEventThrottle={16}
              onScroll={event => {
                this.scrollOffset = event.nativeEvent.contentOffset.y;
                this.scrollViewHeight = event.nativeEvent.layoutMeasurement.height;
              }}
              onContentSizeChange={(contentWidth, contentHeight) => {
                this.contentHeight = contentHeight;
              }}
            >
              <Text style={styles.fakeText}>Top</Text>
              <Text style={styles.fakeComments} />
              <Text style={styles.fakeText}>Bottom</Text>
            </ScrollView>
          </View>
          <View style={styles.inputWrap}>
            <TextInput style={styles.textInput} placeholder="Comment" />
          </View>
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
  modal: {
    width: 350,
    height: 500,
    borderColor: '#F8BBD0',
    borderWidth: 2,
  },
  comments: {
    flex: 9.5,
  },
  fakeComments: {
    height: 500,
  },
  fakeText: {
    textAlign: 'center',
    color: '#F06292',
    fontSize: 20,
    paddingVertical: 8,
    backgroundColor: 'white',
  },
  inputWrap: {
    flex: 0.5,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
});

export default CommentModal;
