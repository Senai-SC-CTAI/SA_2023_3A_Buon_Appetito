import { StyleSheet } from "react-native";

const AddProduto = StyleSheet.create({
  containerEditModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5EFEC',
    marginHorizontal: 20
  },
  modalEditTitle: {
    fontWeight: '400',
    fontSize: 26,
    marginTop: 30,
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
    backgroundColor: '#FEFEFE',
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
    backgroundColor: '#FEFEFE',
    borderWidth: 1,
    borderColor: '#D5D5D5',
    borderRadius: 10,
    height: 120,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
    textAlign: 'left'
  },
  btnDivide:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    width: 280,
  },
  btnAdd: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#743C34',
    width: 120,
    height: 40,
    borderRadius: 10,
  },
  btnAddText:{
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 28,
  },
  btnCancela: {
    borderWidth: 1,
    borderColor: '#A07964',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5EFEC',
    width: 120,
    height: 40,
    borderRadius: 10,
  },
  btnCancelaText:{
    color: '#8F8F8F',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 28,
  },

})

export default AddProduto