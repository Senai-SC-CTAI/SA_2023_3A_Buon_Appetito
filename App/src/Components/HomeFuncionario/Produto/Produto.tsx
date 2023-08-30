import React, { useState } from 'react';

import { View, Image, Text, TouchableOpacity, Modal, TextInput } from 'react-native';
import styles from './ProdutoStyles'


export function Produto() {
      const [editlVisible, setEditlVisible] = useState(false);
    return (
        <View>

            <Modal
            animationType="slide"
            transparent={true}
            visible={editlVisible}
            onRequestClose={() => {
            setEditlVisible(!editlVisible);
            }}>


                
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>Editar Produto</Text>
                        <TouchableOpacity>
                            <Image style={styles.modalImage}
                            source={require('../../../../assets/CookieLapisSA.png')}
                            />
                        </TouchableOpacity>
                        <View style={styles.modalContainer}>
                                <Text style={styles.containerText}>Nome</Text>
                                <TextInput style={styles.containerCaixa}>

                                </TextInput>

                                <Text style={styles.containerText}>Informações nutricionais</Text>
                                <TextInput style={styles.containerCaixaInfo}>

                                </TextInput>

                                <Text style={styles.containerText}>Preço</Text>
                                <TextInput style={styles.containerCaixa}>

                                </TextInput>
                        </View>


                        <TouchableOpacity
                        style={[styles.btnEditar]}
                        onPress={() => setEditlVisible(!editlVisible)}>
                            <Text style={styles.btnEditarText}>Editar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity
            onPress={() => setEditlVisible(true)}>
                <View style={styles.container}>
                    <Text style={styles.nome}>Imagem</Text>
                    <Text style={styles.nome}>Produto</Text>
                    <TouchableOpacity>
                        <Text style={styles.nome}>Excluir</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
  );
}