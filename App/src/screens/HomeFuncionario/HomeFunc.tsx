import React from 'react';
import { View, TouchableOpacity, Text, TextInput} from 'react-native';

import styles from './HomeFuncStyles'

import { useNavigation } from '@react-navigation/native';

import { Cardapio } from '../../Components/HomeFuncionario/Cardapio/Cardapio';

export function HomeFunc() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('welcome')
    }

    return (
    <View style={styles.main}>
        <View>
            <Text style={styles.nome}>Valentina Kroth Gil Cardoso</Text>
            <Text style={styles.titulo}>Cardápio Ca</Text>
            <Text style={styles.subtitulo}>Veja as opções do dia para a sua refeição</Text>
        </View>

        <View style={styles.container}>
        <TextInput 
            style={styles.pesquisar}
                placeholder='Pesquisar...'>
            </TextInput>

            <TouchableOpacity style={styles.btn}
                onPress={openScreen}>
            </TouchableOpacity>
        </View>

        <Cardapio />
    </View>
  );
}