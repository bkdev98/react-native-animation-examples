import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const ShareIcon = ({ onPress }) => (
  <TouchableOpacity
    style={{
      height: 40,
      width: 40,
      top: 6,
      left: 20,
    }}
    onPress={onPress}
  >
    <Ionicons name="ios-menu-outline" size={25} color="white" />
  </TouchableOpacity>
);

export default ShareIcon;
