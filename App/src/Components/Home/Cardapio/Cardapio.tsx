import React from 'react';
import { ScrollView, View } from 'react-native';

import styles from './CardapioStyles';
import { Produto } from '../Produto/Produto';

export function Cardapio() {
    const produtos = [
      { id: 1, nome: 'Croissant', imagem: require('../../../../assets/croissant.png'), ingredientes: 'Farinha de trigo, sal, açúcar, fermento, leite, manteiga e ovo', preco: '$5.00' },
      { id: 2, nome: 'Pão de Queijo', imagem: require('../../../../assets/pao.png'), ingredientes: 'Polvilho, queijo, leite, óleo, ovo e sal ', preco: '$3.00' },
      { id: 3, nome: 'Sanduíche', imagem: require('../../../../assets/sanduiche.png'), ingredientes: 'Pão, alface, tomate, presunto e maionese ', preco: '$8.00' },
      { id: 4, nome: 'Coxinha', imagem: require('../../../../assets/coxinha.png'), ingredientes: 'Frango, cebola, farinha de trigo, ovo, margarina, alho, cheiro-verde, sal e farinha de rosca', preco: '$4.00' },
      { id: 5, nome: 'Suco de Laranja', imagem: require('../../../../assets/suco.png'), ingredientes: 'Laranja, água e açucar ', preco: '$2.50' },
    ];
  
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
        <View style={styles.posicionamento}>
          {produtos.map((produto) => (
            <Produto
              key={produto.id}
              nome={produto.nome}
              imagem={produto.imagem}
              ingredientes={produto.ingredientes}
              preco={produto.preco}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
