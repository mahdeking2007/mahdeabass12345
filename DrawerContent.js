import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
 import React,{useState} from 'react'
 import { View,TextInput, Text, TouchableOpacity } from 'react-native'
 
 const DrawerContent = ({navigation}) => {
     return (
         <View>
             <TouchableOpacity onPress={()=>navigation.navigate("Screen")}>
                 <Text> go screen</Text>
             </TouchableOpacity>
         </View>
     )
 }
 
 export default DrawerContent
 