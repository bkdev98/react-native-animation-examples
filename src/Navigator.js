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
import CommentModal from './animations/CommentModal';
import FloatingHeart from './animations/FloatingHeart';
import EventCard from './animations/EventCard';
import CollapseHeader from './animations/CollapseHeader';
import MagicInput from './animations/MagicInput';

const Navigator = StackNavigator({
  List: { screen: List },
  AnimatedBasic: { screen: AnimatedBasic },
  MagicButton: { screen: MagicButton },
  MagicCard: { screen: MagicCard },
  ColorBox: { screen: ColorBox },
  ParallaxScrollview: { screen: ParallaxScrollview },
  BouncingHeart: { screen: BouncingHeart },
  SpringyMenu: { screen: SpringyMenu },
  CommentModal: { screen: CommentModal },
  FloatingHeart: { screen: FloatingHeart },
  EventCard: { screen: EventCard },
  CollapseHeader: { screen: CollapseHeader },
  MagicInput: { screen: MagicInput },
});

export default Navigator;
