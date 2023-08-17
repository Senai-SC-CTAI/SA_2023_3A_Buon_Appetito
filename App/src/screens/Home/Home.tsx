import React from 'react';
import { View, TouchableOpacity, Text} from 'react-native';

import styles from './HomeStyles'

import { useNavigation } from '@react-navigation/native';


export function Home() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('welcome')
    }
  
    return (
    <View className="flex-1">
        <View className='mt-16 ml-10'>
            <Text className='text-base text-[#606060]'>Valentina Kroth Gil Cardoso</Text>
            <Text className='font-medium mt-2 text-4xl text-[#402218]'>Seja bem-vindo!</Text>
            <Text className='mt-2 text-xl text-[#606060]'>Veja as opções do dia para a sua refeição</Text>
        </View>
        {/* <TouchableOpacity className='text-center items-center justify-center'
            onPress={openScreen}>
            <Text>
                Voltar ao Welcome
            </Text>
        </TouchableOpacity> */}
    </View>
  );
}