import React from 'react';
import { View, TouchableOpacity, Text, Image, TextInput} from 'react-native';

import styles from './LoginStyles'

import { useNavigation } from '@react-navigation/native';
import CheckboxWithText from '../../Components/CheckboxWithText';


export function Login() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('home')
    }
    function openScreen2(){
        navigation.navigate('recsenha1')
    }
  
    return (
        <View className="mx-auto flex-1 bg-[#F5EFEC]">
    
            <Image className='mx-auto' source={require('../../../assets/header-register.png')}/>
    
            {/* <View className='relative'>
                <View className='absolute'>
                <View className="mx-auto w-32 h-32 rounded-full bg-[#F5EFEC] border-[#BFA08F] border-4">
                    <Image className='mx-auto mt-2' source={require('../../assets/logo-cantina.png')}/>
                </View>
                </View>
            </View> */}
            <View className='mx-[50px]'>
                <View className='items-center justify-center mt-24'>
    
                    <Text className='font-medium text-[28px] mt-14'>
                        Login
                    </Text>
    
                    <View className='gap-5 mt-3'>
                        <View className='py-3 border-b border-[#D5D5D5] w-[285px]'>
                            <TextInput className='text-[18px]'
                            placeholder='Email'>
                            </TextInput>
                        </View>
    
                        <View className='py-3 border-b border-[#D5D5D5] w-[285px]'>
                            <TextInput className='text-[18px]'
                            placeholder='Senha'
                            secureTextEntry={true}>
                            
                            </TextInput>
                        </View>
                    </View>
                </View>

                <View className='flex flex-row justify-between mt-6'>
                    <View>
                        <CheckboxWithText />
                    </View>
                    <View className='bg-gray-100'>
                        <TouchableOpacity
                            onPress={openScreen2}>
                            <Text className='text-[#743C34] text-[14px]'>Esqueceu a senha?</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <TouchableOpacity className='mt-6 text-center items-center justify-center px-24 py-2 bg-[#743C34] rounded-[10px]'
                        onPress={openScreen}>
                        <Text className='text-white font-medium text-lg'>
                            Entrar
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
      );
}