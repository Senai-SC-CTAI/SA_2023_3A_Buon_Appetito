import React from 'react';
import { View, TouchableOpacity, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function Welcome() {
    const navigation = useNavigation();
  
    function openScreenLogin(){
        navigation.navigate('login')
    }
    function openScreenRegister(){
        navigation.navigate('register')
    }
  
    return (
    <View className="flex-1 items-center justify-center">
        <View>
        <TouchableOpacity className='text-center items-center justify-center'
            onPress={openScreenLogin}>
            <Text>
                Login
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={openScreenRegister}>
            <Text>
                Register
            </Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//     // container: {
//     //     flex: 1,
//     //     backgroundColor: "#fff",
//     //     justifyContent: "center",
//     //     alignItems: 'center'
//     // },
//     btn: {

//     },
//     btn_text: {

//     }
    
// })