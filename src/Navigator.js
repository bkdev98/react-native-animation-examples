import {
  StackNavigator,
} from 'react-navigation';

import List from './components/List';
import AnimatedBasic from './animations/AnimatedBasic';
import MagicButton from './animations/MagicButton';
import MagicCard from './animations/MagicCard';
import ColorBox from './animations/ColorBox';
import ParallaxScrollview from './animations/ParallaxScrollview';
import BouncingHeart from './animations/BouncingHeart';
import SpringyMenu from './animations/SpringyMenu';

const Navigator = StackNavigator({
  List: { screen: List },
  AnimatedBasic: { screen: AnimatedBasic },
  MagicButton: { screen: MagicButton },
  MagicCard: { screen: MagicCard },
  ColorBox: { screen: ColorBox },
  ParallaxScrollview: { screen: ParallaxScrollview },
  BouncingHeart: { screen: BouncingHeart },
  SpringyMenu: { screen: SpringyMenu },
});

export default Navigator;
