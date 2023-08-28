import React from 'react';
import { View, TouchableOpacity, Text, TextInput} from 'react-native';

import styles from './HomeStyles'

import { useNavigation } from '@react-navigation/native';

import { Cardapio } from '../../Components/Home/Cardapio/Cardapio';
import { Header } from '../../Components/Home/Header/Header';

export function Home() {
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