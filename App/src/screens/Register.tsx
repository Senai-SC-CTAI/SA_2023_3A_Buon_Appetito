import React from 'react';
import { View, TouchableOpacity, Text, Image, TextInput} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import CheckboxWithText from '../Components/CheckboxWithText';

export function Register() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('home')
    }
  
    return (
    <View className="mx-auto flex-1 bg-[#F5EFEC]">

        <Image className='mx-auto' source={require('../../assets/header-register.png')}/>

        {/* <View className='relative'>
            <View className='absolute'>
            <View className="mx-auto w-32 h-32 rounded-full bg-[#F5EFEC] border-[#BFA08F] border-4">
                <Image className='mx-auto mt-2' source={require('../../assets/logo-cantina.png')}/>
            </View>
            </View>
        </View> */}
        <View className='mx-[50px]'>
            <View className='items-center justify-center mt-10'>

                <Text className='font-medium text-[28px] mt-14'>
                    Cadastro
                </Text>

                <View className='gap-7 mt-7'>
                    <View className='py-3 border-b border-[#D5D5D5] w-[285px] transition-colors duration-200 ease-in-out hover:border-[#6E07F3]'>
                        <TextInput className='text-[18px]'
                        placeholder='Nome Completo'>
                        </TextInput>
                    </View>

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

                    <View className='py-3 border-b border-[#D5D5D5] w-[285px]'>
                        <TextInput className='text-[18px]'
                        placeholder='Confirmar Senha'
                        secureTextEntry={true}>
                        </TextInput>
                    </View>
                </View>
            </View>

            <CheckboxWithText />

            <View>
                <TouchableOpacity className='mt-5 text-center items-center justify-center px- py-3 bg-[#743C34] rounded-[10px]'
                    onPress={openScreen}>
                    <Text className='text-white font-medium text-lg'>
                        Criar
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    </View>
  );
}