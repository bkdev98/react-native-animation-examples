import {
  StackNavigator,
} from 'react-navigation';

import List from './List';
import AnimatedBasic from './AnimatedBasic';
import Button from './Button';
import Card from './Card';
import ColorBox from './ColorBox';

const Navigator = StackNavigator({
  List: { screen: List },
  AnimatedBasic: { screen: AnimatedBasic },
  MagicButton: { screen: Button },
  MagicCard: { screen: Card },
  ColorBox: { screen: ColorBox },
});

export default Navigator;
