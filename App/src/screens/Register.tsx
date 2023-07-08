import React from 'react';
import { View, TouchableOpacity, Text, Image} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function Register() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('home')
    }
  
    return (
    <View className="mx-auto flex-1 bg-[#F5EFEC]">
        <Image className='mx-auto' 
        source={require('../../assets/header-register.png')} 
        />
    <View className='relative'>
        <View className='absolute top-1/2 left-1/2'>
        <View className="mx-auto w-32 h-32 rounded-full bg-[#F5EFEC] border-[#BFA08F] border-4">
            <Image className='mx-auto mt-2' 
            source={require('../../assets/logo-cantina.png')}
            />
        </View>
        </View>
    </View>
        <TouchableOpacity  className='text-center items-center justify-center'
            onPress={openScreen}>
            <Text>
                Register
            </Text>
        </TouchableOpacity>
    </View>
  );
}