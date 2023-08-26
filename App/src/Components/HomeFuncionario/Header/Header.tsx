import React from 'react';

import { View, SafeAreaView, Image, Text, TouchableOpacity } from 'react-native';
import styles from './HeaderStyles'

export function Header() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.text}>
                <Text style={styles.nome}>
                    Valentina Kroth Gil Cardoso
                </Text>
                <Text style={styles.titulo}>
                    Cardápio Cantina
                </Text>
                <Text style={styles.descricao}>
                    Veja as opções do dia para a sua refeição
                </Text>
            </View>
        </SafeAreaView>
  );
}