import { StyleSheet } from "react-native";

const RecSenha4Styles = StyleSheet.create({

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
        marginTop: 50,
        
    },
    titulo: {
        fontWeight: '500',
        fontSize: 28, 
        marginTop: 46,
        marginBottom: 10,
        textAlign: 'center',
        width: 285
    },
    titulo2: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 20,
        lineHeight: 24,
        fontWeight: '300',
        color: '#515151',

    },
    container_info: {
        gap: 16,
        marginTop: 28,
        width: 285,
        
    },
    info_caixa: {
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

    imageContainer: {
        marginTop: 0,  // Espaçamento entre a imagem e o texto
        alignItems: 'center',
    },
    imgs: {
        width: 200,    // Largura da imagem
        height: 200,   // Altura da imagem
        resizeMode: 'contain', // Modo de redimensionamento da imagem
    },

})

export default RecSenha4Styles
