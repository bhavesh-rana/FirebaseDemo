//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// create a component
const {width} = Dimensions.get('screen');
const Storage = () => {
  const [text, setText] = useState('');
  const [allData, setallData] = useState([]);

  useEffect(() => {
    async function temp() {
      await Getitem();
    }
    temp();
  }, []);

  const AddDataPress = async () => {
    allData.push(text);
    const outPut = JSON.stringify(allData);
    await AsyncStorage.setItem('Item', outPut)
      .then(res => alert('Pass data'), setText(''))
      .catch(err => alert(err));
  };

  const Getitem = async () => {
    const data = await AsyncStorage.getItem('Item');
    const output = JSON.parse(data);
    setallData(output);
  };
  console.log('allData=>>>', allData);
  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        placeholder="Text"
        onChangeText={value => setText(value)}
        style={{backgroundColor: 'pink', width: width - 100, borderRadius: 10}}
      />
      <TouchableOpacity
        onPress={AddDataPress}
        style={{
          backgroundColor: '#008011',
          marginVertical: 15,
          padding: 10,
          borderRadius: 10,
        }}>
        <Text>ADD DATA</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={Getitem}
        style={{
          backgroundColor: '#008011',
          marginVertical: 15,
          padding: 10,
          borderRadius: 10,
        }}>
        <Text>SHOW DATA</Text>
      </TouchableOpacity>

      {allData.map((Item, index) => {
        return (
          <View key={index}>
            <Text style={{color: '#fff'}}>{Item}</Text>
          </View>
        );
      })}
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
export default Storage;
