import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Importe o ícone da biblioteca Feather Icons

const CheckboxWithText = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
      onPress={toggleCheckbox}
    >
      <View
        style={{
          width: 18,
          height: 18,
          borderRadius: 4,
          borderWidth: 1,
          borderColor: isChecked ? '#000' : '#D5D5D5',
          marginRight: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {isChecked && (
          <Feather name="check" size={14} color="blue" /> // Ícone de check exibido quando isChecked é verdadeiro
        )}
      </View>
      <Text style={{ fontSize: 14}}>Lembre-me</Text>
    </TouchableOpacity>
  );
};

export default CheckboxWithText;
