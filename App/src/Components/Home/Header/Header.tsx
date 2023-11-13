import React, { useState } from 'react';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { View, Text, TouchableOpacity, TextInput, Modal, StyleSheet, SafeAreaView } from 'react-native';
import { Cog6ToothIcon } from 'react-native-heroicons/outline';
import styles from './HeaderStyles';

export function Header() {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

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
                <TouchableOpacity style={styles.settings} onPress={openModal}>
                    <Cog6ToothIcon size={36} color={'white'} />
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={closeModal}
                >
                    <View style={modalStyles.centeredView}>
                        <View style={modalStyles.modalView}>
                            <TouchableOpacity style={modalStyles.menuItem} onPress={() => console.log('Segunda')}>
                                <Text style={modalStyles.menuText}>Segunda</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={modalStyles.menuItem} onPress={() => console.log('Terça')}>
                                <Text style={modalStyles.menuText}>Terça</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={modalStyles.menuItem} onPress={() => console.log('Quarta')}>
                                <Text style={modalStyles.menuText}>Quarta</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={modalStyles.menuItem} onPress={() => console.log('Quinta')}>
                                <Text style={modalStyles.menuText}>Quinta</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={modalStyles.menuItem} onPress={() => console.log('Sexta')}>
                                <Text style={modalStyles.menuText}>Sexta</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={modalStyles.menuItem} onPress={() => console.log('Alterar senha')}>
                                <Text style={modalStyles.menuText}>Alterar senha</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={modalStyles.menuItem} onPress={closeModal}>
                                <Text style={modalStyles.menuText}>Sair</Text>
                            </TouchableOpacity>
                          
                        </View>
                    </View>
                </Modal>


            </View>
        </SafeAreaView>
    );
}

const modalStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        width: 150,
        marginRight: 10,
        marginBottom: 268,
        borderWidth: 2,
        borderColor: '#A07964', // Cor da borda
        elevation: 5,
    },
    menuItem: {
        paddingVertical: 8,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    menuText: {
        fontSize: 16,
        textAlign: 'center', // Centraliza o texto
        color: '#606060', // Cor do texto
    },
});

export default Header;
