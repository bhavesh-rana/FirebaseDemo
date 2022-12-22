import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Sucsees from '../screens/Sucsees';
import SplashScreen from '../screens/SplashScreen';
import Adddailes from '../../NewSrc/Screens/Home';
import FirstScrren from '../screens/PhoneOuthentication/FirstScrren';
import SecondScreens from '../screens/PhoneOuthentication/SecondScreen';
import Complete from '../screens/PhoneOuthentication/Complete';
const Stack = createNativeStackNavigator();
export default function StackNaviagation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FirstScrren"
          component={FirstScrren}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SecondScreens"
          component={SecondScreens}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Complete"
          component={Complete}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Adddailes"
          component={Adddailes}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Sucsees"
          component={Sucsees}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
