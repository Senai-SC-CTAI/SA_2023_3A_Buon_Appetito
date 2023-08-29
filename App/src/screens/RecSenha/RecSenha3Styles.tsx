import { StyleSheet } from "react-native";

const RecSenha3Styles = StyleSheet.create({

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
        marginTop: 56,
        marginBottom: 35
    },
    titulo2: {
        textAlign: 'center',
        marginTop: 24,
        fontSize: 15,
        lineHeight: 24,
        fontWeight: '300',
        color: '#515151'
        // fontSize: 15,
        // justifyContent: 'center',
        // marginTop: 25,
        // alignItems: 'center',
        // color: '#515151'

    },
    container_info: {
        gap: 16,
        marginTop: 28,
        width: 285,
        
    },
    info_caixa: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#D5D5D5',
        marginBottom: 18
    },
    info_caixa_text: {
        fontSize: 18
    },
    container2: {
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom: 19, 
     
      },
    
      buttonContainer: {
        flexDirection: 'row', 
        justifyContent: 'center',
      },

      buttonSeparator: {
        width: 30, 
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
        borderRadius: 10,
        width: '100%'
    },
    btn_text: {
        color: 'white',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 28
    },

    btn2:{
        marginTop: 24,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 10,
        width: '100%',
        borderWidth: 1,
        borderColor: '#A07964',
        backgroundColor: '#F5EFEC',
       
      },
  
      btn_text2:{
        color: '#8F8F8F',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 28,
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      
      },
    
    icon: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default RecSenha3Styles
