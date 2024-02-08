import { useState } from 'react';
import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { COLORS } from './constants/theme';

export default function Login({navigation}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{backgroundColor: 'red'}}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ImageBackground>
          <Text style={styles.title}>Welcome, Groundhog!</Text>
          <TextInput 
          style={styles.input} 
          label="Username" 
          value={username} 
          onChangeText={text => setUsername(text)} 
          />

          <TextInput 
          style={styles.input} 
          label="Password" 
          value={password} 
          onChangeText={text => setPassword(text)}
          secureTextEntry={true} 
          />
          <Button style={styles.button} name="Login" onPress={()=> navigation.navigate('Tabs')}>
            Login
          </Button>
        </ImageBackground>
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

  button: {
    backgroundColor: COLORS.primary,
  }
});