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
        <View style={styles.main}>
    
        <Image source={require('../../../assets/header-register.png')}style={styles.imglogo}/>

        {/* <View className='relative'>
            <View className='absolute'>
            <View className="mx-auto w-32 h-32 rounded-full bg-[#F5EFEC] border-[#BFA08F] border-4">
                <Image className='mx-auto mt-2' source={require('../../assets/logo-cantina.png')}/>
            </View>
            </View>
        </View> */}
        <View style={styles.container}>
         
                
                    <Text style={styles.titulo}>
                        Recuperar Senha
                    </Text>
                    <Text style={styles.titulo2}>
                    Digite o código que enviamos <br />
                     para o seu email
                    </Text>
                <View style={styles.container_info}>
                    <View style={styles.info_caixa}>
                        <TextInput style={styles.info_caixa_text}
                        placeholder='Email'>
                        </TextInput>
                    </View>

                </View>
            </View>
            <View style={styles.container2}>
                <TouchableOpacity style={styles.btn}
                 onPress={openScreen}>
                    <Text style={styles.btn_text}>
                        Próximo
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>

  );
}
