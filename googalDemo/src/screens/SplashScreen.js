import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React, {useEffect, useState} from 'react';
import Auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {Onnewuser} from '../redux/action/actiontype';
const SplashScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [userManage, setuserManage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      Auth().onAuthStateChanged(user => {
        console.log('user==> =>>>>>', user);
        const routeName = user != null ? 'Sucsees' : 'Home';
        navigation.navigate(routeName);
      });
    }, 3000);
  }, []);

  return (
    <ImageBackground
      style={{flex: 1, alignItems: 'center'}}
      source={require('/Users/mac/Documents/BR/googalDemo/src/assets/backGround.png')}>
      <Text style={{color: '#fff', fontSize: 30}}>SPLASH SCREEN</Text>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
