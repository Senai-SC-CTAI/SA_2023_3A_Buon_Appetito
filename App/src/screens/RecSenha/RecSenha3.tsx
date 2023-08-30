import React, { useState} from 'react';
import { View, TouchableOpacity, Text, TextInput, Image} from 'react-native';

import styles from './RecSenha3Styles'

import { useNavigation } from '@react-navigation/native';
import HeaderImage from '../../Components/HeaderImage';
import { Ionicons } from '@expo/vector-icons';


export function RecSenha3() {
    const navigation = useNavigation();
  
    const[input, setInput] = useState('');
    const[hidePass, setHidePass] = useState(true);

    function openScreen(){
        navigation.navigate('recsenha4')
    }
  
    function openScreenrecsenha2(){
        navigation.navigate('recsenha2')
    }

    return (
        <View style={styles.main}>
            <HeaderImage />

        <View style={styles.container}>
         
                
                    <Text style={styles.titulo}>Recuperar Senha</Text>
                    <View style={styles.info_caixa}>
                            <TextInput style={styles.info_caixa_text}
                            placeholder='Digite sua nova senha'
                            value= {input}
                            onChangeText={ (texto) => setInput(texto)}
                            secureTextEntry={hidePass}>
                            </TextInput>
                            <TouchableOpacity style={styles.icon} onPress= { () => setHidePass(!hidePass) }>
                                { hidePass ?
                                    <Ionicons name= "eye-off" color="#000" size={25} />
                                    :
                                    <Ionicons name= "eye" color="#000" size={25} />
                                }
                            </TouchableOpacity>
                        </View>

                        <View style={styles.info_caixa}>
                            <TextInput style={styles.info_caixa_text}
                            placeholder='Confirme sua senha'
                            value= {input}
                            onChangeText={ (texto) => setInput(texto)}
                            secureTextEntry={hidePass}>
                            </TextInput>
                            <TouchableOpacity style={styles.icon} onPress= { () => setHidePass(!hidePass) }>
                                { hidePass ?
                                    <Ionicons name= "eye-off" color="#000" size={25} />
                                    :
                                    <Ionicons name= "eye" color="#000" size={25} />
                                }
                            </TouchableOpacity>
    

                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.btn2} onPress={openScreenrecsenha2}>
                    <Text style={styles.btn_text2}>←   Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={openScreen}>
                    <Text style={styles.btn_text}>Próximo   →</Text>
                </TouchableOpacity>
            </View>
            
        </View>
  );
}
