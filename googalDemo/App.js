import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import StackNaviagation from './src/navigation/stack';
import {Provider} from 'react-redux';
import {stores} from './src/redux/store/stores';
import Storage from './src/screens/Sorage';

const App = () => {
  return (
    <Provider store={stores}>
      {/* <Storage /> */}
      <StackNaviagation />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
