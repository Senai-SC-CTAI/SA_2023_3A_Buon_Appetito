import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function Home() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('welcome')
    }
  
    return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.btn}
            onPress={openScreen}>
            <Text style={styles.btn_text}>
                Voltar ao Welcome
            </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: 'center'
    },
    btn: {

    },
    btn_text: {

    }
    
})