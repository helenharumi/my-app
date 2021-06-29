import React, { useRef } from 'react';
import { Text, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, ScrollView, Alert} from 'react-native';
import { BorderlessButton as Button } from 'react-native-gesture-handler';
import styles from './styles';
import * as indexApi from "../../service/servicesApi"
import { useNavigation } from '@react-navigation/native';

export default function PageSignUp() {
  
  const navigation = useNavigation();

  const emailRef = useRef<any>();
  const ageRef = useRef<any>();
  const addressRef = useRef<any>();
  const passwordRef = useRef<any>();
  const passwordConfirmationRef = useRef<any>();

  const [ name, setName ] = React.useState('');
  const [ email, setEmail ] = React.useState('');
  const [ age, setAge ] = React.useState(0);
  const [ address, setAddress ] = React.useState('');
  const [ userPassword, setPassword ] = React.useState('');

  async function handleSave() {
    indexApi.save(name, email, age, address, userPassword)
    .then(() => {
      Alert.alert('Cadastro efetuado com sucesso');
      navigation.goBack();
    })
    .catch((error) => {
      Alert.alert('Dados informado inválido!',error);
    });
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView contentContainerStyle={styles.container} behavior="position" enabled>
      <>
        
        <Text style={styles.titulo}>Cadastro</Text>
        <TextInput 
        style={styles.input} 
        placeholder="Nome" 
        autoCapitalize='words'
        returnKeyType="next"
        onSubmitEditing={() => { emailRef.current.focus();}}
        blurOnSubmit={false}
        onChangeText={setName}
        />

        <TextInput 
        style={styles.input} 
        placeholder="Email" 
        keyboardType='email-address'
        autoCapitalize='none'
        autoCorrect={false}
        autoCompleteType='email'
        ref={emailRef}
        returnKeyType="next"
        onSubmitEditing={() => { ageRef.current.focus();}}
        blurOnSubmit={false}
        onChangeText={setEmail}
        />

        <TextInput 
        style={styles.input} 
        placeholder="Idade" 
        keyboardType='number-pad'
        ref={ageRef}
        returnKeyType="next"
        onSubmitEditing={() => { addressRef.current.focus();}}
        blurOnSubmit={false}
        onChangeText={setAge}
        />

        <TextInput 
        style={styles.input} 
        placeholder="Endereço" 
        ref={addressRef}
        returnKeyType="next"
        onSubmitEditing={() => { passwordRef.current.focus();}}
        blurOnSubmit={false}
        onChangeText={setAddress}
        />

        <TextInput 
        style={styles.input} 
        placeholder="Senha" 
        secureTextEntry={true} 
        ref={passwordRef}
        returnKeyType="next"
        onSubmitEditing={() => { passwordConfirmationRef.current.focus();}}
        blurOnSubmit={false}
        onChangeText={setPassword}
        />

        <Button 
        onPress={handleSave} style={styles.btn}>
          <Text style={styles.btnTexto}>Criar cadastro</Text>
        </Button>
      </>
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}