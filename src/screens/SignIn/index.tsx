import React, { useRef } from 'react';
import { Text, TextInput, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import { BorderlessButton as Button } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import * as indexApi from "../../service/servicesApi";

export default function PageSignIn() {

  const navigation = useNavigation();
  const passwordRef = useRef<any>();
  
  const [ email, setEmail ] = React.useState('');
  const [ userPassword, setPassword ] = React.useState('');

  function goSignUp() {
    navigation.navigate('SignUp');
  }

  async function handleLogin(){
    indexApi.login(email, userPassword)
    .then(() => {
      navigation.navigate('Produto');
    })
    .catch((error) => {
      Alert.alert('Erro',error);
    });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
    <KeyboardAvoidingView contentContainerStyle={styles.container} behavior="position" enabled>
      <Image style={styles.logo} source={require('../../assets/ecommerce.png')} />
      
      <>
        <Text style={styles.titulo}>Login</Text>

        <TextInput 
        style={styles.input} 
        placeholder="Email"
        keyboardType='email-address'
        autoCapitalize='none'
        autoCorrect={false}
        autoCompleteType='email'
        returnKeyType="next"
        onSubmitEditing={() => { passwordRef.current.focus();}}
        blurOnSubmit={false}
        onChangeText={setEmail}
        />

        <TextInput 
        style={styles.input} 
        placeholder="Senha" 
        secureTextEntry={true}
        ref={passwordRef}
        onChangeText={setPassword}
        />

        <Button onPress={handleLogin} style={styles.btn}>
          <Text style={styles.btnTexto}>Acessar</Text>
        </Button>
      </>
      <Button onPress={goSignUp} style={styles.btn} >
          <Text style={styles.btnTexto}>Criar conta</Text>
        </Button>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}