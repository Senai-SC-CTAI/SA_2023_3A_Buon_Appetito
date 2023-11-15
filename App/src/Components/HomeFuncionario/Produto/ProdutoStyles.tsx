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
    },
    trashIcon:{
      // marginBottom: 1
    },

// Styles editProduto
    containerEditModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalEditView: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '84%',
        height: '88%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      modalEditTitle: {
        fontWeight: '400',
        fontSize: 26,
        marginTop: 40,
        color: '#151515'
      },
      modalImage:{
        resizeMode: 'contain',
        width: 130,
        height: 130,
        marginTop: 20
      },
      modalEdit:{
        width: '80%',
      },
      editText:{
        marginTop: 20,
        color: '#414141',
        fontSize: 18,
        fontWeight: '400',
      },
      editCaixa:{
        marginTop: 6,
        backgroundColor: '#F5EFEC',
        borderWidth: 1,
        borderColor: "#D5D5D5",
        borderRadius: 10,
        height: 40,
        paddingHorizontal: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
        
      },
      editCaixaInfo:{
        marginTop: 6,
        backgroundColor: '#F5EFEC',
        borderWidth: 1,
        borderColor: '#D5D5D5',
        borderRadius: 10,
        height: 120,
        paddingHorizontal: 10,
        textAlignVertical: 'top',
        textAlign: 'left'
      },
      btnEditar: {
        backgroundColor: '#743C34',
        marginTop: 30,
        width: '80%',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
      },
      btnEditarText:{
        color: 'white',
        fontWeight: '500',
        fontSize: 18
      },

// Styles ExcluiProduto
      containerExcluiModal:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalExcluiView:{
        backgroundColor: 'white',
        borderRadius: 10,
        width: '80%',
        height: '20%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      modalExcluiPosition:{
        marginHorizontal: 6,
        marginTop: 20
      },
      modalExcluiTitle:{
        fontSize: 26,
        fontWeight: '400',
        color: '#151515',
        textAlign: 'center'
      },
      btnExcluiSimNao:{
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      btnExcluiSim:{
        borderWidth: 1,
        borderColor: '#A07964',
        height: 40,
        width: 86,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
      },
      btnExcluiTextSim:{
        fontSize: 18,
        fontWeight: '500',
        color: '#8F8F8F'
      },
      btnExcluiNao:{
        backgroundColor: '#743C34',
        height: 40,
        width: 86,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
      },
      btnExcluiTextNao:{
        fontSize: 18,
        fontWeight: '500',
        color: 'white'
      },

      editCaixaPicker: {
        marginTop: 6,
        backgroundColor: '#FEFEFE',
        borderWidth: 1,
        borderColor: "#D5D5D5",
        borderRadius: 10,
        height: 40,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },

      btnClose: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#fff', // Background do botão X
        borderRadius: 50, // Deixar o botão circular
        padding: 5,
        zIndex: 1, // Adicione esse estilo para garantir que o botão esteja acima do conteúdo do modal
      },
    
      btnCloseText: {
        fontSize: 20,
        color: '#402218',
        
      },
    
})

export default ProdutoStyles
