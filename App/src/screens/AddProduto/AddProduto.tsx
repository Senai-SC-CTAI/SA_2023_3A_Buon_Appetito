import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, TouchableOpacity,  } from 'react-native';
import styles from './AddProdutoStyles';

import { useNavigation } from '@react-navigation/native';

export function AddProduto() {
  const navigation = useNavigation()

  function openScreenHomeFunc(){
    navigation.navigate('homefunc')
  }

  return (
    <View style={styles.containerEditModal}>
        <Text style={styles.modalEditTitle}>Adicionar Produto</Text>
        <TouchableOpacity>
            <Image style={styles.modalImage}
            source={require('../../../assets/CookieLapisSA.png')}
            />
        </TouchableOpacity>
        <View style={styles.modalEdit}>
                <Text style={styles.editText}>Nome</Text>
                <TextInput style={styles.editCaixa}></TextInput>
                <Text style={styles.editText}>Informações nutricionais</Text>
                <TextInput style={styles.editCaixaInfo}></TextInput>
                <Text style={styles.editText}>Preço</Text>
                <TextInput style={styles.editCaixa}></TextInput>
        </View>

        <View style={styles.btnDivide}>
          <TouchableOpacity style={[styles.btnCancela]}
          onPress={openScreenHomeFunc}>
              <Text style={styles.btnCancelaText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnAdd]}>
              <Text style={styles.btnAddText}>Adicionar</Text>
          </TouchableOpacity>
        </View>

    </View>
  );
}