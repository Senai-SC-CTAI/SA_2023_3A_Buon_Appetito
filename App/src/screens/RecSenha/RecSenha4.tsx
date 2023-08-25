import React from 'react';
import { View, TouchableOpacity, Text, TextInput, Image} from 'react-native';

import styles from './RecSenha4Styles'

import { useNavigation } from '@react-navigation/native';
import HeaderImage from '../../Components/HeaderImage';


export function RecSenha4() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('login')
    }

    function openScreenrecsenha3(){
        navigation.navigate('recsenha3')
    }
  
    return (
        <View style={styles.main}>
            <HeaderImage />

            <View style={styles.container}>
                <Text style={styles.titulo}>Sua senha foi alterada com sucesso!</Text>
                <Text style={styles.titulo2}>Continue fazendo o login</Text>
            </View>

            <View style={styles.buttonContainer}>
         <TouchableOpacity style={styles.btn} onPress={openScreenrecsenha3}>
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
