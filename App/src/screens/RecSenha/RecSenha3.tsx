import React from 'react';
import { View, TouchableOpacity, Text, TextInput, Image} from 'react-native';

import styles from './RecSenha3Styles'

import { useNavigation } from '@react-navigation/native';
import HeaderImage from '../../Components/HeaderImage';


export function RecSenha3() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('recsenha4')
    }
  
    function openScreenrecsenha2(){
        navigation.navigate('recsenha2')
    }

    return (
        <View style={styles.main}>
    
            <HeaderImage />

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
                    <View style={styles.info_caixa}>
                            <TextInput style={styles.info_caixa_text}
                            placeholder='Digite sua nova senha'
                            secureTextEntry={true}>
                            </TextInput>
                        </View>

                        <View style={styles.info_caixa}>
                            <TextInput style={styles.info_caixa_text}
                            placeholder='Confirme sua senha'
                            secureTextEntry={true}>
                            </TextInput>
    

                </View>
            </View>
            <View style={styles.buttonContainer}>
         <TouchableOpacity style={styles.btn} onPress={openScreenrecsenha2}>
            <Text style={styles.btn_text}>Voltar</Text>
        </TouchableOpacity>

        <View style={styles.buttonSeparator}></View>

        <TouchableOpacity style={styles.btn} onPress={openScreen}>
            <Text style={styles.btn_text}>Próximo</Text>
        </TouchableOpacity>
            </View>
            
        </View>

  );
}
