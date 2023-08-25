import React from 'react';
import { View, TouchableOpacity, Text, TextInput, Image } from 'react-native';

import styles from './RecSenha1Styles';

import { useNavigation } from '@react-navigation/native';

import HeaderImage from '../../Components/HeaderImage';

export function RecSenha1() {
    const navigation = useNavigation();

    function openScreen() {
        navigation.navigate('recsenha2');
    }

    return (
        <View style={styles.main}>
            <HeaderImage />

            <View style={styles.container}>
                <Text style={styles.titulo}>Recuperar Senha</Text>
                <Text style={styles.titulo2}>Digite o email para enviarmos o código de recuperação</Text>
                <View style={styles.container_info}>
                    <View style={styles.info_caixa}>
                        <TextInput style={styles.info_caixa_text} placeholder="Email" />
                    </View>
                </View>
            </View>

            <View style={styles.container2}>
                <View style={{ flex: 1 }} />
                <TouchableOpacity style={styles.btn} onPress={openScreen}>
                    <Text style={styles.btn_text}>Próximo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
