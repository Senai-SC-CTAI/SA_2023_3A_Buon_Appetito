import React, { useRef } from 'react';
import { View, TouchableOpacity, Text, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importe o ícone que deseja usar

import styles from './RecSenha2Styles';

import { useNavigation } from '@react-navigation/native';
import HeaderImage from '../../Components/HeaderImage';

export function RecSenha2() {
    const navigation = useNavigation();
    const codeInputs = Array(6).fill(0).map(() => useRef(null));

    function openScreen() {
        navigation.navigate('recsenha3');
    }

    function openScreenrecsenha1() {
        navigation.navigate('recsenha1');
    }

    function handleInputChange(text, index) {
        if (text) {
            if (index < codeInputs.length - 1) {
                codeInputs[index + 1].current.focus();
            }
            
        } else {
            if (index > 0) {
                codeInputs[index - 1].current.focus();
            }
        }
    }

    return (
        <View style={styles.main}>
            <HeaderImage />

            <View style={styles.container}>
                <Text style={styles.titulo}>Recuperar Senha</Text>
                <Text style={styles.titulo2}>
                    Digite o código que enviamos <br />
                    para o seu email
                </Text>

                <View style={styles.codeContainer}>
                    {codeInputs.slice(0, 4).map((ref, index) => (
                        <View style={styles.codeInputContainer} key={index}>
                            <TextInput
                                style={styles.codeInput}
                                maxLength={1}
                                onChangeText={(text) => handleInputChange(text, index)}
                                ref={ref}
                            />
                        </View>
                    ))}
                </View>

                <View style={styles.centeredCodeContainer}>
                    {codeInputs.slice(4).map((ref, index) => (
                        <View style={styles.codeInputContainer} key={index + 4}>
                            <TextInput
                                style={styles.codeInput}
                                maxLength={1}
                                onChangeText={(text) => handleInputChange(text, index + 4)}
                                ref={ref}
                            />
                        </View>
                    )).reverse()}
                </View>
            </View>

            <View style={styles.container2}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.btn2} onPress={openScreenrecsenha1}>
                        <Text style={styles.btn_text2}>Voltar</Text>
                    </TouchableOpacity>

                    <View style={styles.buttonSeparator}></View>

                    <TouchableOpacity style={styles.btn} onPress={openScreen}>
                        <Text style={styles.btn_text}>Próximo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
