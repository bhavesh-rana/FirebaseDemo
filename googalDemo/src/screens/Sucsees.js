import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useRoute} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useSelector} from 'react-redux';
const Sucsees = ({navigation, route}) => {
  const names = auth()?.currentUser;
  console.log('names?._user?', names);
  const logOut = async () => {
    try {
      await auth().signOut();
      // await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      alert('Sign-out successful.');
    } catch (error) {
      // alert(error);
    }
  };

  return (
    <ImageBackground
      style={{flex: 1, justifyContent: 'center'}}
      source={require('/Users/mac/Documents/BR/googalDemo/src/assets/backGround.png')}>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.50)',
          height: 230,
          margin: 20,
          borderRadius: 20,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Image
          style={{height: 100, width: 100}}
          source={{
            uri:
              names?.photoURL == null
                ? 'https://img.icons8.com/office/512/human-head.png'
                : names?._user?.photoURL,
          }}
        />
        <View>
          <Text style={{color: '#fff'}}>email:------{names?._user?.email}</Text>
          <Text style={{color: '#fff'}}>Id:----{names?._user?.uid}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          alignSelf: 'center',
        }}
        onPress={logOut}>
        <Text
          style={{
            backgroundColor: '#00FFF6',
            padding: 5,
            borderRadius: 5,
            color: '#000',
          }}>
          LOGOUT
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Sucsees;

const styles = StyleSheet.create({});
