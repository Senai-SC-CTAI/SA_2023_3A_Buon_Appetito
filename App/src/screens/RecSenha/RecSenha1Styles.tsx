import { StyleSheet } from "react-native";

const RecSenha1Styles = StyleSheet.create({
    main: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#F5EFEC'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35,
        
    },
    titulo: {
        fontWeight: '500',
        fontSize: 28, 
        marginTop: 100
    },
    titulo2: {
        textAlign: 'center',
        marginTop: 24,
        fontSize: 20,
        lineHeight: 24,
        fontWeight: '400',
        color: '#515151',
        width: 285

    },
    container_info: {
        marginTop: 28,
        width: 285
    },
    info_caixa: {
        paddingTop: 12,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#D5D5D5'
    },
    info_caixa_text: {
        fontSize: 18
    },
    container2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    recSenha: {
        marginTop: 24
    },
    recSenha_text: {
        color: '#743C34',
        fontSize: 14
    },
    btn: {
        marginTop: 40,
        marginRight: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#743C34',
        width: 130,
        height: 40,
        borderRadius: 10,
    },
    btn_text: {
        color: 'white',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 28
    },
    
})

export default RecSenha1Styles
