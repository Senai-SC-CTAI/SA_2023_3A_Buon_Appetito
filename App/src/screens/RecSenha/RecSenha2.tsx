import React from 'react';
import { View, TouchableOpacity, Text, TextInput, Image} from 'react-native';

import styles from './RecSenha2Styles'

import { useNavigation } from '@react-navigation/native';
import HeaderImage from '../../Components/HeaderImage';


export function RecSenha2() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('recsenha3')
    }

    function openScreenrecsenha1(){
        navigation.navigate('recsenha1')
    }
  
    return (
        <View style={styles.main}>
    
            <HeaderImage />

        {/* <View className='relative'>
            <View className='absolute'>
            <View className="mx-auto w-32 h-32 rounded-full bg-[#F5EFEC] border-[#BFA08F] border-4">
                <Image className='mx-auto mt-2' source={require('../../assets/logo-cantina.png')}/>
            </View>
            </View>
        </View> */}
        <View style={styles.container}>
         
                
                    <Text style={styles.titulo}>
                        Recuperar Senha
                    </Text>
                    <Text style={styles.titulo2}>
                    Digite o código que enviamos <br />
                     para o seu email
                    </Text>
                    <View style={styles.codeContainer}>

        <View style={styles.codeContainer}>
  <View style={styles.codeInputContainer}>
    <TextInput style={styles.codeInput} maxLength={1} />
  </View>

  <View style={styles.codeContainer}>
  <View style={styles.codeInputContainer}>
    <TextInput style={styles.codeInput} maxLength={1} />
  </View>

  <View style={styles.codeInputContainer}>
    <TextInput style={styles.codeInput} maxLength={1} />
  </View>

  <View style={styles.codeInputContainer}>
    <TextInput style={styles.codeInput} maxLength={1} />
  </View>



</View>

{/* Adicione os dois novos inputs centralizados */}
<View style={styles.centeredCodeContainer}>
  <View style={styles.codeInputContainer}>
    <TextInput style={styles.codeInput} maxLength={1} />
  </View>

  <View style={styles.codeInputContainer}>
    <TextInput style={styles.codeInput} maxLength={1} />
  </View>

</View>

</View>
   
                </View>
            </View>

            <View style={styles.container2}>
    <View style={styles.buttonContainer}>
         <TouchableOpacity style={styles.btn} onPress={openScreenrecsenha1}>
            <Text style={styles.btn_text}>Voltar</Text>
        </TouchableOpacity>

        <View style={styles.buttonSeparator}></View>

        <TouchableOpacity style={styles.btn} onPress={openScreen}>
            <Text style={styles.btn_text}>Próximo</Text>
        </TouchableOpacity>

       
    </View>
</View>    
        </View>

  );
}
