import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './App/Screen/Home';
import Screen from './App/Screen/Screen';
import DrawerContent from './App/Screen/DrawerContent';
import Login from './App/Navigation/Mytab';

const Tab=createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Screen" component={Screen}/>  
        <Tab.Screen name="DrawerContent" component={DrawerContent}/>
        <Tab.Screen name="Login" component={Login}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
