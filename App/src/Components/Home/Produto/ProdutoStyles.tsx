import { StyleSheet } from 'react-native';

const ProdutoStyles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    width: 300,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FCFCFC',
  },
  imagem: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  nome: {
    fontSize: 22,
    color: '#151515',

  },
  cardContent: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  subtitulo: {
    fontSize: 18,
    color: '#A07964',
    

  },
  descricao: {
    fontSize: 16,
    color: '#515151',
   
    fontWeight: '300',
    marginTop: 1.5,
    marginBottom: 6,
  },
});

export default ProdutoStyles;
