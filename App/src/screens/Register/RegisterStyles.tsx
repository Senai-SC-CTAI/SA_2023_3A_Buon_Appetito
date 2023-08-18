import { StyleSheet } from "react-native";

const RegisterStyles = StyleSheet.create({
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
        marginTop: 40
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
        paddingTop: 12,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#D5D5D5'
    },
    info_caixa_text: {
        fontSize: 18
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
    }
})

export default RegisterStyles