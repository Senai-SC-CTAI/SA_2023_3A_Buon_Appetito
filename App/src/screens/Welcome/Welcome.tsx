import React from 'react';
import { View, TouchableOpacity, Text, Image} from 'react-native';

import styles from './WelcomeStyles'

import { useNavigation } from '@react-navigation/native';


export function Welcome() {
    const navigation = useNavigation();
  
    function openScreenLogin(){
        navigation.navigate('login')
    }
    function openScreenRegister(){
        navigation.navigate('register')
    }
    function openScreenHomeFunc(){
        navigation.navigate('homefunc')
    }
  
    return (
    <View style={styles.main}>

        <View >
            <Image style={{width: 430, height: 380}}
            source={require('../../../assets/header-welcome.png')} 
            />
        </View>

        <View  style={styles.container}>
            <View style={styles.detalhe}>
                <Text style={styles.titulo}>
                    Buon Appetito
                </Text>
            </View>

            <Text style={styles.descricao}>
            Apresentamos nosso aplicativo de cantina escolar, uma solução inovadora para otimizar a gestão da cantina, mostramos o cardápio para tornar a experiência da cantina mais eficiente e agradável.
            </Text>

            <View style={styles.botoes}>
                <TouchableOpacity style={styles.cadastro}
                    onPress={openScreenRegister}>
                    <Text style={styles.cadastro_texto}>
                        Cadastro
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.login}
                    onPress={openScreenLogin}>
                    <Text style={styles.login_texto}>
                        Login
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cadastro}
                    onPress={openScreenHomeFunc}>
                    <Text style={styles.login_texto}>
                        Funcionário
                    </Text>
                </TouchableOpacity>
                
            </View>
        </View>
    </View>
  );
}