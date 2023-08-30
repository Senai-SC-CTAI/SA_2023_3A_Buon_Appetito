import React from 'react';
import { ScrollView, View } from 'react-native';

import styles from './CardapioStyles'
import { Produto } from '../Produto/Produto';

export function Cardapio() {
    return (
        <ScrollView style={styles.container}
        showsVerticalScrollIndicator={true}>
            <View style={styles.posicionamento}>
                <Produto />
                <Produto />
                <Produto />
                <Produto />
                <Produto />
            </View>
        </ScrollView>
  );
}