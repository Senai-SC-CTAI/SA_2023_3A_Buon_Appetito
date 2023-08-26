import { StyleSheet } from "react-native";

const HeaderStyles = StyleSheet.create({
    container:{
        flex: 1/1.5,
        width: '100%',
        height: '50%',
        alignItems: 'center',
        // backgroundColor: 'red'
        
    },
    text:{
        width: 300,
        marginTop: 40

    },
    nome:{
        fontSize: 16, 
        fontWeight: '300',
        textAlign: 'left',
        color: '#606060'
    },
    titulo:{
        fontSize: 40, 
        textAlign: 'left',
        color: '#402218',
        marginTop: 6
    },
    descricao:{
        fontSize: 22,
        textAlign: 'left',
        color: '#606060',
        marginRight: 50,
        marginTop: 6
    },
})

export default HeaderStyles