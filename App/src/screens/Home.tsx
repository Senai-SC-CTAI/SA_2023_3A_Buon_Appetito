import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function Home() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('welcome')
    }
  
    return (
    <View className="flex-1 items-center justify-center">
        <TouchableOpacity
            onPress={openScreen}>
            <Text>
                Voltar ao Welcome
            </Text>
        </TouchableOpacity>
    </View>
  );
}