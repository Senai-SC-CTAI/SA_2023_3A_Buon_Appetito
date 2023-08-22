import React from 'react';
import { View, TouchableOpacity, Text, TextInput} from 'react-native';

import styles from './HomeStyles'

import { useNavigation } from '@react-navigation/native';


export function Home() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('welcome')
    }
  
    return (
    <View>
        <View>
            <Text style={styles.nome}>Valentina Kroth Gil Cardoso</Text>
            <Text style={styles.titulo}>Cardápio Cantina</Text>
            <Text style={styles.subtitulo}>Veja as opções do dia para a sua refeição</Text>
        </View>

        <TextInput 
            style={styles.pesquisar}
                placeholder='Pesquisar...'>
            </TextInput>

        {/* <TouchableOpacity className='text-center items-center justify-center'
            onPress={openScreen}>
            <Text>
                Voltar ao Welcome
            </Text>
        </TouchableOpacity> */}
    </View>
  );
}