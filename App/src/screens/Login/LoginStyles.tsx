import { StyleSheet } from "react-native";

const LoginStyles = StyleSheet.create({
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
        marginTop: 96
    },
    titulo: {
        fontWeight: '500',
        fontSize: 28, 
        marginTop: 56
    },
    container_info: {
        gap: 16,
        marginTop: 28,
        width: 285
    },
    info_caixa: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        marginTop: 24,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: '#743C34',
        borderRadius: 10
    },
    btn_text: {
        color: 'white',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 28
    },
    icon: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default LoginStyles