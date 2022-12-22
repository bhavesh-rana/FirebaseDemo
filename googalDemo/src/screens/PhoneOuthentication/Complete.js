//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Complete = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#FEFCF3', fontSize: 50}}>Hooray!</Text>
      <Text style={{color: '#fff', fontSize: 20}}>
        You complete prosesing !
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Complete;
