import { StyleSheet } from "react-native";

const ProdutoStyles = StyleSheet.create({
    container:{
        marginTop: 50,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: '#FCFCFC',
        width: 300
    },
    nome:{
        fontSize: 22
    }
})

export default ProdutoStyles