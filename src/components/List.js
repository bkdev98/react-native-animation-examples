import React, { Component } from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Share,
} from 'react-native';

import ShareIcon from '../icons/ShareIcon';
import HelpIcon from '../icons/HelpIcon';
import Info from './Info';

const data = [{
//   key: 'AnimatedBasic',
//   title: 'Animated Basic',
// }, {
//   key: 'MagicButton',
//   title: 'Magic Button',
// }, {
//   key: 'MagicCard',
//   title: 'Magic Card',
// }, {
//   key: 'ColorBox',
//   title: 'Color Box',
// }, {
  key: 'ParallaxScrollview',
  title: 'Parallax Scrollview',
  icon: '🐬',
}, {
  key: 'BouncingHeart',
  title: 'Bouncing Heart',
  icon: '💕',
}, {
  key: 'SpringyMenu',
  title: 'Springy Menu',
  icon: '🍕',
}, {
  key: 'CommentModal',
  title: 'Comment Modal',
  icon: '🍻',
}, {
  key: 'FloatingHeart',
  title: 'Floating Heart',
  icon: '🦄',
}, {
  key: 'EventCard',
  title: 'Event Card',
  icon: '🎼',
}, {
  key: 'CollapseHeader',
  title: 'Collapse Header',
  icon: '🎃',
}, {
  key: 'MagicInput',
  title: 'Magic Input',
  icon: '💅',
}];

class List extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Animations',
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
    headerRight: <ShareIcon onPress={() => Share.share({
      message: 'Well its not far down to paradise, at leasts not for me',
      title: 'Christopher Cross',
      url: 'https://github.com/bkdev98/react-native-animation-examples',
    }, {
      dialogTitle: 'Sailing',
    })}
    />,
    headerLeft: navigation.state.params ? navigation.state.params.headerLeft : null,
  })

  state = {
    infoOpen: false,
  }

  componentDidMount() {
    this.props.navigation.setParams({
      headerLeft: <HelpIcon onPress={this.toggleInfoDialog} />,
    });
  }

  toggleInfoDialog = () => {
    this.setState({
      infoOpen: !this.state.infoOpen,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.infoOpen &&
          <View style={styles.infoContainer}>
            <Info onPress={() => this.setState({ infoOpen: true })} />
          </View>
        }

        <StatusBar barStyle="light-content" />
        <FlatList
          data={data}
          renderItem={({ item, index }) =>
            (<TouchableOpacity
              onPress={() => this.props.navigation.navigate(item.key)}
              style={[styles.itemContainer, { backgroundColor: `rgba(255, 26, 117, ${0.3 + (0.05 * index)})` }]}
            >
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>{item.icon}</Text>
              </View>
              <View style={styles.itemTitleContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>
              </View>
            </TouchableOpacity>)
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    position: 'absolute',
    zIndex: 1000,
  },
  headerContainer: {
    height: 100,
    backgroundColor: '#EC407A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 25,
  },
  itemContainer: {
    flexDirection: 'row',
    height: 90,
  },
  iconContainer: {
    width: 90,
    backgroundColor: 'rgba(255,255,255,.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 30,
  },
  itemTitleContainer: {
    justifyContent: 'center',
    paddingLeft: 20,
  },
  itemTitle: {
    color: 'white',
    fontSize: 20,
  },
});

export default List;
