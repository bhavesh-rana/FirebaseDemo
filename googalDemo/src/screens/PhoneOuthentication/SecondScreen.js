//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// create a component
const SecondScreens = ({navigation, route}) => {
  const [confirm, setConfirm] = useState(route?.params?.information);
  const [code, setCode] = useState();

  console.log('route ==>', route?.params?.information?._user);
  //console.log('confirm =>>>>', confirm);
  console.log('code=>>>', code);
  const onOtpSubmmit = async () => {
    try {
      await confirm.confirm(code);
      alert('User created');
      navigation.navigate('Complete');
    } catch (error) {
      alert('Invalid code.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{color: '#fff', fontSize: 25, marginBottom: 15}}>
        Plese Enter OTP
      </Text>
      <TextInput
        placeholder="000000"
        value={code}
        onChangeText={val => setCode(val)}
        style={{
          backgroundColor: '#C8B6E2',
          width: '60%',
          letterSpacing: 20,
          borderBottomColor: 'red',
          fontSize: 25,
          height: 50,
          borderRadius: 10,
          paddingLeft: 5,
          marginBottom: 15,
        }}
      />
      <TouchableOpacity onPress={onOtpSubmmit}>
        <Text
          style={{
            color: '#fff',
            fontSize: 25,
            marginBottom: 15,
            backgroundColor: '#1C0C5B',
            padding: 15,
            borderRadius: 10,
          }}>
          OTP verifyed
        </Text>
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
export default SecondScreens;
