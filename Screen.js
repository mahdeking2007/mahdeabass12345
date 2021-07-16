import React,{useState} from 'react'
import { View, Text, TouchableOpacity ,TextInput} from 'react-native'

const Screen = ({navigation}) => {
    const [one,setone]=useState(parseInt(0))
    const [two,settwo]=useState(parseInt(0))
    const [esawe,setesawe]=useState(one+two)
    return (
        <View>
            <TouchableOpacity
             onPress={() =>navigation.navigate("Login") }>
                 <Text>pageLogin</Text>
            </TouchableOpacity>
            <Text>
                {esawe}
            </Text>
            <View style={{flexDirection:"row"}}> 
            <TextInput 
            style={{backgroundColor:"#ccc", }}
            placeholder="0" 
            onChangeText={(text)=>setone(parseInt(text))}>
            </TextInput>
            <TextInput 
            style={{backgroundColor:"#ccc",marginLeft:15,marginRight:15, }}
            placeholder="0" 
            onChangeText={(text)=>settwo (parseInt(text))}>
            </TextInput>
            </View>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity 
                style={{marginLeft:15,marginRight:15,}}
                onPress={()=>setesawe(one+two)}>
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 style={{marginLeft:15,marginRight:15,}} 
                 onPress={()=>setesawe(one/two)}>
                    <Text>/</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                 style={{marginLeft:15,marginRight:15,}}
                 onPress={()=>setesawe(one-two)}>
                    <Text>-</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 style={{marginLeft:15,marginRight:15,}}
                onPress={()=>setesawe(one*two)}>
                    <Text>x</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Screen
