//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
// create a component
const FirstScrren = ({navigation}) => {
  const [phoneNumber, setphoneNumber] = useState();

  const onSubmit = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      navigation.navigate('SecondScreens', {information: confirmation});
      alert('OTP send');
    } catch (error) {
      alert(error);
    }
  };
  const onGuestSignin = async () => {
    auth()
      .signInAnonymously()
      .then(() => {
        alert('User signed in anonymously');
        navigation.navigate('Complete');
      })
      .catch(error => {
        if (error.code === 'auth/operation-not-allowed') {
          alert('Enable anonymous in your firebase console.');
        }

        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={{color: 'pink', fontSize: 30, top: -60}}>SIGN IN</Text>
      <TextInput
        value={phoneNumber}
        placeholderTextColor={'rgba(0,0,0,0.34)'}
        placeholder="+910123456789"
        onChangeText={value => setphoneNumber(value)}
        keyboardType="phone-pad"
        style={{
          backgroundColor: '#C8B6E2',
          width: '70%',
          borderRadius: 10,
          height: 50,
          paddingLeft: 10,
          fontSize: 20,
          marginBottom: 10,
        }}
      />
      <TouchableOpacity onPress={onSubmit}>
        <Text
          style={{
            color: '#fff',
            fontSize: 25,
            marginBottom: 15,
            backgroundColor: '#1C0C5B',
            padding: 15,
            borderRadius: 10,
          }}>
          OTP send
        </Text>
      </TouchableOpacity>
      <Text style={{color: 'pink', fontSize: 30}}>Or</Text>
      <TouchableOpacity onPress={onGuestSignin}>
        <Text style={{color: '#fff', fontSize: 20, marginTop: 20}}>Guest</Text>
      </TouchableOpacity>
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
export default FirstScrren;
