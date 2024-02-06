import React from 'react';
import {View,Text, StyleSheet, TextInput,Image,TouchableOpacity} from 'react-native';

const app = () => {
  const[text, onChangeText]=React.useState('');
  const[number, onChangeNumber]=React.useState('');

  return(
    <View style={styles.container}>
      <View style={styles.content}>


      <Image
      style= {styles.logo}
      source={{
        uri: 'https://sumare.sp.senai.br/Img/logo-senai2.png'
      }}
      />

      <TextInput
       style={styles.input}
       onChangeText={onChangeText}
       placeholder="Login"
       value={text}
      />
      <TextInput
      style={styles.input}
      onChangeText={onChangeNumber}
      value={number}
      placeholder="Senha"
      keyboardType="numeric"
      secureTextEntry={true}
      />

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Entrar</Text>
    </TouchableOpacity>
    </View>
    </View>
  );
};





const styles=StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#f2f2f2',
    height: '100%',
    width:'100%',
    padding:'20%',
    
  },  
  content: {
    width: '100%',
    alignItems: 'center',
  },
  logo:{
    width: 300,
    height: 80, 
    marginBottom: 20
    
  },

  input:{
    height: 50,
    width: 300, 
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});



export default app;

