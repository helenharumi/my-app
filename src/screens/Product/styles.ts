import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../global/styles/theme';

export default StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  logoutBtn: {
    marginRight: 15,
    color: theme.colors.primary,
    padding: 10,
  },
  produto: {
    borderRadius: 10,
    borderBottomColor: theme.colors.secondary40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 20,
  },
  block: {
    width: '48%'
  },
  nomeProduto: {
    color: theme.colors.secondary50,
    fontFamily: theme.fonts.text900Black,
    fontSize: 22
  },
  nomeFabricante: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.secondary50,
    fontSize: 16
  },
  qtdTag:{
    color: theme.colors.secondary50,
    fontFamily: theme.fonts.title500,
    fontSize: 16,
  },
  qtdEstoque:{
    color: theme.colors.secondary50,
    fontFamily: theme.fonts.title500,
    fontSize: 16,
  },
  nomePreco: {
    fontFamily: theme.fonts.text600SemiBold,
    textAlign: 'right',
    textTransform: 'uppercase',
    color: theme.colors.secondary50,
    fontSize: 20
  },
  preco: {
    color: theme.colors.secondary50,
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    marginTop: 10,
    textAlign: 'right'
  }
});