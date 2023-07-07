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
        <TouchableOpacity className=''
            onPress={openScreenLogin}>
            <Text>
                Register
            </Text>
        </TouchableOpacity>

        <TouchableOpacity className='items-center justify-center'
            onPress={openScreenRegister}>
            <Text>
                Login
            </Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}