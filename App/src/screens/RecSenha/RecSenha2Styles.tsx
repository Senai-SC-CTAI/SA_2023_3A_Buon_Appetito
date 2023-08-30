import { StyleSheet } from "react-native";

const RecSenha2Styles = StyleSheet.create({
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
        marginBottom: 24,
        width: 285
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
    recSenha: {
      marginTop: 24
    },
    recSenha_text: {
      color: '#743C34',
      fontSize: 14
    },
    container2: {
      marginTop: 20,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'

      },
    btn2:{
      borderWidth: 1,
      borderColor: '#A07964',
      marginTop: 40,
      marginRight: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5EFEC',
      width: 130,
      height: 40,
      borderRadius: 10,
    },
    btn_text2: {
      color: '#8F8F8F',
      fontWeight: '500',
      fontSize: 18,
      lineHeight: 28,
      display:'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    btn: {
      marginTop: 40,
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
        lineHeight: 28,
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    codeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      codeInputContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 15,
      },
      codeInput: {
        width: 40,
        height: 40,
        fontSize: 24,
        textAlign: 'center',
        borderBottomWidth: 1,
      },
      codeDivider: {
        width: 40,
        height: 1,
        backgroundColor: 'black',
        marginTop: 10,
      },

      centeredCodeContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35,
      },
       icon: {
        width: '15%',
        height: 50, 
        justifyContent: 'center',
        alignItems: 'center',
        color: '#8F8F8F',
      }
})

export default RecSenha2Styles
