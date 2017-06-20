import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const OpenIcon = ({ onPress }) => (
  <TouchableOpacity
    style={{
      height: 40,
      width: 40,
      top: 6,
    }}
    onPress={onPress}
  >
    <Ionicons name="ios-code-download-outline" size={30} color="white" />
  </TouchableOpacity>
);

export default OpenIcon;
