import React from 'react';
import { View, TouchableOpacity, Text, TextInput} from 'react-native';

import styles from './HomeFuncStyles'

import { useNavigation } from '@react-navigation/native';

import { Cardapio } from '../../Components/HomeFuncionario/Cardapio/Cardapio';
import { Header } from '../../Components/HomeFuncionario/Header/Header';

export function HomeFunc() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('welcome')
    }

    return (
    <View style={styles.main}>
        <Header />
        <Cardapio />
    </View>
  );
}