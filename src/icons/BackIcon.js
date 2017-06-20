import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const BackIcon = ({ onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      height: 40,
      width: 40,
      top: 6,
      left: 20,
    }}
  >
    <Ionicons name="ios-arrow-round-back-outline" size={30} color="white" />
  </TouchableOpacity>
);

export default BackIcon;
