import React from 'react';
import { View, TouchableOpacity, Text, Image} from 'react-native';

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
    <View className=''>

        <View>
            <Image className='' 
            source={require('../../assets/header-welcome.png')} 
            />
        </View>

        <View className='text-center items-center justify-center mt-10 mx-[10%]'>
            <View className='border-b border-[#743C34] pb-3'>
                <Text className='text-[50px]'>
                    Buon Appetito
                </Text>
            </View>

            <Text className='text-center mt-6 text-base font-light'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae augue ipsum. 
            Curabitur sed auctor urna. Nam ut nulla in leo vulputate interdum.
            </Text>

            <View className='gap-6 mt-14'>
                <TouchableOpacity className='text-center items-center justify-center px-24 py-2 bg-[#402218] rounded-[10px]'
                    onPress={openScreenRegister}>
                    <Text className='text-white font-medium text-lg'>
                        Cadastro
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity className='text-center items-center justify-center px-24 py-2 bg-[#BEA497] rounded-[10px]'
                    onPress={openScreenLogin}>
                    <Text className='text-white font-medium text-lg'>
                        Login
                    </Text>
                </TouchableOpacity>
                
            </View>
        </View>
    </View>
  );
}