import React from 'react';
import { View, TouchableOpacity, Text, Image, TextInput} from 'react-native';

import styles from './LoginStyles'

import { useNavigation } from '@react-navigation/native';
import CheckboxWithText from '../../Components/CheckboxWithText';
import HeaderImage from '../../Components/HeaderImage';

export function Login() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('home')
    }
    function openScreen2(){
        navigation.navigate('recsenha1')
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

            <View>
                <View style={styles.container}>
                    <Text style={styles.titulo}>
                        Login
                    </Text>
    
                    <View style={styles.container_info}>
                        <View style={styles.info_caixa}>
                            <TextInput style={styles.info_caixa_text}
                            placeholder='Email'>
                            </TextInput>
                        </View>
    
                        <View style={styles.info_caixa}>
                            <TextInput style={styles.info_caixa_text}
                            placeholder='Senha'
                            secureTextEntry={true}>
                            </TextInput>
                        </View>
                    </View>
                </View>

                <View style={styles.container2}>

                        <CheckboxWithText />

                        <TouchableOpacity style={styles.recSenha}
                            onPress={openScreen2}>
                            <Text style={styles.recSenha_text}>
                                Esqueceu a senha?
                            </Text>
                        </TouchableOpacity>

                </View>
                
                    <TouchableOpacity style={styles.btn}
                        onPress={openScreen}>
                        <Text style={styles.btn_text}>
                            Entrar
                        </Text>
                    </TouchableOpacity>
                
            </View>
        </View>
      );
}