import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Home = ({navigation}) => {
  return (
    <View>
       <TouchableOpacity
        onPress={() =>navigation.navigate("DrawerContent") }
       >
         <Text>go DrawerContent
         </Text>
       </TouchableOpacity>
    </View>
  )
}

export default Home
