import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
  },
  titulo: {
    color: theme.colors.secondary50,
    fontSize: 28,
    marginBottom: 10,
  },
  input: {
    borderColor: theme.colors.secondary40,
    borderWidth: 1,
    borderRadius: 5,
    fontFamily: theme.fonts.text400,
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: Dimensions.get('screen').width -30,
  },
  btn: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 10
  },
  btnTexto: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
  }
});