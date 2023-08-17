import React from 'react';
import { View, TouchableOpacity, Text, TextInput, Image} from 'react-native';

import styles from './RecSenha2Styles'

import { useNavigation } from '@react-navigation/native';
import CheckboxWithText from '../../Components/CheckboxWithText';


export function RecSenha2() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('recsenha3')
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

                    <View className='text-center justify-center items-center'>
                        <Text className='font-medium text-[28px] mt-14'>
                            Recuperar Senha
                        </Text>
                        <Text className='text-lg mt-4 text-center text-[#515151] mx-[8]'>
                            Digite o código que enviamos para o seu email
                        </Text>
                    </View>
    
                </View>
                <View>
                    <TouchableOpacity className='mt-6 text-center items-center justify-center px-24 py-2 bg-[#743C34] rounded-[10px]'
                        onPress={openScreen}>
                        <Text className='text-white font-medium text-lg'>
                            Próximo
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
      );
}