import { StyleSheet } from "react-native";

const WelcomeStyles = StyleSheet.create({
    main: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    container: {
        marginTop: 10,
        marginHorizontal: '10%'
    },
    detalhe: {
        borderBottomWidth: 1,
        borderBottomColor: '#743C34',
        paddingBottom: 12
    },
    titulo: {
        fontSize: 40,
        textAlign: 'center'
    },
    descricao: {
        textAlign: 'center',
        marginTop: 24,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '300'
    },
    botoes: {
        gap: 24,
        marginTop: 30
    },
    cadastro: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 96,
        paddingRight: 96,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: '#402218',
        borderRadius: 10
    },
    cadastro_texto: {
        color: 'white',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 28
    },
    login: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 96,
        paddingRight: 96,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: '#BEA497',
        borderRadius: 10
    },
    login_texto: {
        color: 'white',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 28
    },

})

export default WelcomeStyles