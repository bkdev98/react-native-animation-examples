import React from 'react';
import { View } from 'react-native';

import Navigator from './Navigator';
import StatusBar from './components/StatusBar';

const App = () => (
  <View style={{ flex: 1 }}>
    <StatusBar />
    <Navigator />
  </View>
);

export default App;
