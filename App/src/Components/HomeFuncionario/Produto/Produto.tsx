import React, { useState } from 'react';
import { TrashIcon } from 'react-native-heroicons/outline'


import { View, Image, Text, TouchableOpacity, Modal, TextInput, Button, Alert, Picker  } from 'react-native';
import styles from './ProdutoStyles'


export function Produto() {
      const [editVisible, setEditVisible] = useState(false);
      const [excluilVisible, setExcluilVisible] = useState(false);
      const [selectedDay, setSelectedDay] = useState(''); // Novo estado para armazenar a opção selecionada no dropdown
    return (
        <View>

            {/* Modal para editar produto */}
            <Modal
            animationType="slide"
            transparent={true}
            visible={editVisible}
            onRequestClose={() => {
            setEditVisible(!editVisible);
            }}>
                <View style={styles.containerEditModal}>
                    <View style={styles.modalEditView}>
                    <TouchableOpacity
              style={styles.btnClose}
              onPress={() => setEditVisible(!editVisible)}
            >
              <Text style={styles.btnCloseText}>X</Text>
            </TouchableOpacity>
                        <Text style={styles.modalEditTitle}>Editar Produto</Text>
                        <TouchableOpacity>
                            <Image style={styles.modalImage}
                            source={require('../../../../assets/CookieLapisSA.png')}
                            />
                        </TouchableOpacity>
                        <View style={styles.modalEdit}>
                                <Text style={styles.editText}>Nome</Text>
                                <TextInput style={styles.editCaixa}></TextInput>
                                <Text style={styles.editText}>Informações nutricionais</Text>
                                <TextInput style={styles.editCaixaInfo}></TextInput>
                                <Text style={styles.editText}>Preço</Text>
                                <TextInput style={styles.editCaixa}></TextInput>
                                <Text style={styles.editText}>Dia da Semana</Text>
                                <Picker
                                style={styles.editCaixa}
                                selectedValue={selectedDay}
                                onValueChange={(itemValue, itemIndex) => setSelectedDay(itemValue)}
                                >
                                <Picker.Item label="Selecione o dia" value="" />
                                <Picker.Item label="Segunda" value="segunda" />
                                <Picker.Item label="Terça" value="terca" />
                                <Picker.Item label="Quarta" value="quarta" />
                                <Picker.Item label="Quinta" value="quinta" />
                                <Picker.Item label="Sexta" value="sexta" />
                                </Picker>
                        </View>
                        <TouchableOpacity
                        style={[styles.btnEditar]}
                        onPress={() => setEditVisible(!editVisible)}>
                            <Text style={styles.btnEditarText}>Editar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Modal para excluir produto */}
            <Modal
            animationType="slide"
            transparent={true}
            visible={excluilVisible}
            onRequestClose={() => {
            setExcluilVisible(!excluilVisible);
            }}>
                <View style={styles.containerExcluiModal}>
                    <View style={styles.modalExcluiView}>
                        <View style={styles.modalExcluiPosition}>
                            <Text style={styles.modalExcluiTitle}>Deseja exluir este produto?</Text>
                            <View style={styles.btnExcluiSimNao}>
                                <TouchableOpacity
                                style={[styles.btnExcluiSim]}
                                onPress={() => setExcluilVisible(!excluilVisible)}>
                                    <Text style={styles.btnExcluiTextSim}>Excluir</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                style={[styles.btnExcluiNao]}
                                onPress={() => setExcluilVisible(!excluilVisible)}>
                                    <Text style={styles.btnExcluiTextNao}>Não</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity
            onPress={() => setEditVisible(true)}>
                <View style={styles.container}>
                    <Text style={styles.nome}>Imagem</Text>
                    <Text style={styles.nome}>Produto</Text>
                    <TouchableOpacity
                    onPress={() => setExcluilVisible(true)}>
                    <TrashIcon  color={'red'} size={30}/>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
  );
}
