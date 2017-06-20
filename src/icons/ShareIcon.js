import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const ShareIcon = ({ onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      height: 40,
      width: 40,
      top: 6,
    }}
  >
    <Ionicons name="ios-share-outline" size={25} color="white" />
  </TouchableOpacity>
);

export default ShareIcon;
