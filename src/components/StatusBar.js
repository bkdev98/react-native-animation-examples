import React from 'react';
import { Platform, View } from 'react-native';

const StatusBar = () => (
  Platform.OS === 'android' && Platform.Version >= 20 ?
    <View style={{ height: 24, backgroundColor: '#EC407A' }} />
    : <View />
);

export default StatusBar;
