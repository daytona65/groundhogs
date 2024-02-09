import React from 'react'
import { useState } from 'react';
import { Image, KeyboardAvoidingView, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { COLORS } from './constants/theme';
import axios from 'axios';

export default function Register({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function doRegister() {
    try {
      const registerData = {
        email, 
        password,
      };

      await axios.post("http://localhost:5000/auth/register/", registerData);

    } catch (err) {
      console.log(err);
    }

    navigation.navigate('Tabs');
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Image source={{uri: 'https://picsum.photos/200/300'}} resizeMode='repeat'/>
          <Text style={styles.title}>Sign Up</Text>
          <TextInput 
            style={styles.input} 
            label="Email" 
            value={email} 
            onChangeText={text => setEmail(text)} 
          />

          <TextInput 
            style={styles.input} 
            label="Password" 
            value={password} 
            onChangeText={text => setPassword(text)}
            secureTextEntry={true} 
          />
          <View style={styles.buttonContainer}>
            <Button 
              style={styles.button} 
              name="Register" 
              textColor='white'
              onPress={doRegister}
            >
              Register
            </Button>
          </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    marginBottom: 20,
    width: 300
  },
  buttonContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 50,
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: COLORS.primary,
    margin: 10,
    width: 100,
  }
});