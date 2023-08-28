import React from 'react';

import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './ProdutoStyles'

export function Produto() {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.nome}>Imagem</Text>
                <Text style={styles.nome}>Produto</Text>
            </View>
        </TouchableOpacity>
  );
}