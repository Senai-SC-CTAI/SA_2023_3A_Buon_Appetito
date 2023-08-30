import React from 'react';
import { MagnifyingGlassIcon, Cog6ToothIcon, PlusIcon } from 'react-native-heroicons/outline'

import { View, SafeAreaView, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './HeaderStyles'

import { useNavigation } from '@react-navigation/native';

export function Header() {
    const navigation = useNavigation()

    function openAddProduto(){
        navigation.navigate('addproduto')
    }

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
                Modificar cardápio
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
                <TouchableOpacity style={styles.settings}>
                    <Cog6ToothIcon size={36} color={'white'}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settings}
                onPress={openAddProduto}>
                    <PlusIcon size={36} color={'white'}/> 
                </TouchableOpacity>
            </View>
        </SafeAreaView>
  );
}
