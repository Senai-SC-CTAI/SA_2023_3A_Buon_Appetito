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





    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '80%',
        height: '82%',
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
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      modalTitle: {
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
      modalContainer:{
        width: '80%',
      },
      containerText:{
        marginTop: 20,
        color: '#414141',
        fontSize: 18,
        fontWeight: '400',
      },
      containerCaixa:{
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
      containerCaixaInfo:{
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
        marginTop: 40,
        width: '80%',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
      },
      btnEditarText:{
        color: 'white',
        fontWeight: '500',
        fontSize: 18
      }


})

export default ProdutoStyles