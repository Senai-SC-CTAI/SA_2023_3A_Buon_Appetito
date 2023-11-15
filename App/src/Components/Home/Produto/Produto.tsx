import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import ProdutoStyles from './ProdutoStyles';

export function Produto({ nome, imagem, ingredientes, preco }) {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleToggleCard = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <TouchableOpacity onPress={handleToggleCard}>
      <View style={ProdutoStyles.container}>
        <View style={ProdutoStyles.header}>
          <Image source={{ uri: imagem }} style={ProdutoStyles.imagem} />
          <Text style={ProdutoStyles.nome}>{nome}</Text>
          <AntDesign name={isCardOpen ? 'up' : 'down'} size={22} color="#151515" />
        </View>
        {isCardOpen && (
          <View style={ProdutoStyles.cardContent}>
            <Text style={ProdutoStyles.subtitulo}>Ingredientes do produto</Text>
            <Text style={ProdutoStyles.descricao}>{ingredientes}</Text>
            <Text style={ProdutoStyles.subtitulo}>Preço</Text>
            <Text style={ProdutoStyles.descricao}>{preco}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}
