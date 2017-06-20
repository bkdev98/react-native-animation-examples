import {
  StackNavigator,
} from 'react-navigation';

import List from './components/List';
import AnimatedBasic from './animations/AnimatedBasic';
import MagicButton from './animations/MagicButton';
import MagicCard from './animations/MagicCard';
import ColorBox from './animations/ColorBox';
import ParallaxScrollview from './animations/ParallaxScrollview';

const Navigator = StackNavigator({
  List: { screen: List },
  AnimatedBasic: { screen: AnimatedBasic },
  MagicButton: { screen: MagicButton },
  MagicCard: { screen: MagicCard },
  ColorBox: { screen: ColorBox },
  ParallaxScrollview: { screen: ParallaxScrollview },
});

export default Navigator;
