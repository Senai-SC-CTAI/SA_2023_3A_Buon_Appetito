import React from 'react';

import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './ProdutoStyles'

export function Produto() {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text>Imagem</Text>
                <Text>Produto</Text>
                <TouchableOpacity>
                    <Text>Excluir</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
  );
}