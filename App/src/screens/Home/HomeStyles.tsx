import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({

    main: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#FEFEFE'
    },

    nome: {
       fontSize: 18,
       marginTop: 40
    },

    titulo: {
        fontSize: 32
    },

    subtitulo: {
        fontSize: 22
    },

    pesquisar: {
        backgroundColor: '#E7E7E7',
        borderRadius: 100,
        color: '#ADADAD',
        padding: 10
    },

    btn: {
        backgroundColor: '#743C34',
        borderRadius: 100,
        height: 40,
        width: 40,
    },

    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
})

export default HomeStyles