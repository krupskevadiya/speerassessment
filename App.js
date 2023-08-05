import React from 'react';
import {View} from 'react-native';
import AppRoute from './src/route';
const App = props => {
  return (
    <View style={{flex: 1}}>
      <AppRoute></AppRoute>
    </View>
  );
};

export default App;
