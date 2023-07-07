import React from 'react';
import { View, TouchableOpacity, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function Login() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('home')
    }
  
    return (
    <View className="flex-1 items-center justify-center">
        <TouchableOpacity className='text-center items-center justify-center'
            onPress={openScreen}>
            <Text>
                Login
            </Text>
        </TouchableOpacity>
    </View>
  );
}