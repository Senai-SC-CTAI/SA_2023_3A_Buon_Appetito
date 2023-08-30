import React, { useState } from 'react';

import { View, Image, Text, TouchableOpacity, Modal } from 'react-native';
import styles from './ProdutoStyles'


export function Produto() {
      const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>

            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(!modalVisible);
            }}>


                
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>



                        <TouchableOpacity
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Editar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity>
                <View style={styles.container}>
                    <Text style={styles.nome}>Imagem</Text>
                    <Text style={styles.nome}>Produto</Text>
                    <TouchableOpacity
                    onPress={() => setModalVisible(true)}>
                        <Text style={styles.nome}>Excluir</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
  );
}