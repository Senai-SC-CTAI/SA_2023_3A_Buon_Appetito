import { StyleSheet } from "react-native";

const HeaderStyles = StyleSheet.create({
    container: {
        flex: 1 / 1.5,
        width: '100%',
        height: '50%',
        alignItems: 'center',
    },
    text: {
        width: 300,
        marginTop: 40,
    },
    nome: {
        fontSize: 16,
        fontWeight: '300',
        textAlign: 'left',
        color: '#606060',
    },
    titulo: {
        fontSize: 40,
        textAlign: 'left',
        color: '#402218',
        marginTop: 6,
    },
    descricao: {
        fontSize: 22,
        textAlign: 'left',
        color: '#606060',
        marginRight: 50,
        marginTop: 6,
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 20, // Ajuste a distância vertical entre os botões e a barra superior
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgb(245, 245, 245)',
        borderRadius: 100,
        padding: 16,
        paddingHorizontal: 10,
        marginTop: 10, // Ajuste a distância vertical do botão de pesquisa
    },
    search_input: {
        fontSize: 16,
        paddingLeft: 6,
    },
    settings: {
        marginLeft: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 999,
        backgroundColor: '#743C34',
        marginTop: 10, // Ajuste a distância vertical do botão de configurações
    },
  
}
)

export default HeaderStyles;


