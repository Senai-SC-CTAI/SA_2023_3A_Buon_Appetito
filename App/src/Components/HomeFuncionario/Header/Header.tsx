import React from 'react';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'

import { View, SafeAreaView, Image, Text, TouchableOpacity, TextInput } from 'react-native';
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
            <View style={styles.search}>
                {/* <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray"/> */}
                    <TextInput style={styles.search_input}
                    placeholder='Pesquisar...'
                    placeholderTextColor={'gray'}
                />
                <MagnifyingGlassIcon size={20} strokeWidth={2} color="gray"/>
            </View>
        </SafeAreaView>
  );
}