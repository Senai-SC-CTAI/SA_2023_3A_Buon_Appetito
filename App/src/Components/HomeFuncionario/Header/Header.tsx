import React from 'react';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { Cog6ToothIcon } from 'react-native-heroicons/outline'
import { PlusIcon } from 'react-native-heroicons/outline'

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
            <View style={styles.buttons}>
                <View style={styles.search}>
                        <TextInput style={styles.search_input}
                        placeholder='Pesquisar...'
                        placeholderTextColor={'gray'}
                    />
                    <MagnifyingGlassIcon style={{marginLeft: 16}} size={20} strokeWidth={2} color="gray"/>
                </View>
                <View style={styles.settings}>
                    <Cog6ToothIcon size={36} color={'white'}/>
                </View>
                <View style={styles.settings}>
                    <PlusIcon size={36} color={'white'}/> 
                </View>
            </View>
        </SafeAreaView>
  );
}
