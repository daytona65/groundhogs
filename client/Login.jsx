import { useState } from 'react';
import { Image, KeyboardAvoidingView, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { COLORS } from './constants/theme';
import Background from './assets/drawkit-transport-scene-5.png';

export default function Login({navigation}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Image source={{uri: 'https://picsum.photos/200/300'}} resizeMode='repeat'/>
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
          <Text style={{color: 'blue', textDecorationLine: 'underline'}}
            onPress={()=> navigation.navigate('Tabs')}>
              Forgot Password?
            </Text>
          <View style={styles.buttonContainer}>
            <Button 
              style={styles.button} 
              name="Login" 
              textColor='white'
              onPress={()=> navigation.navigate('Tabs')}
            >
              Login
            </Button>
            <Button 
              style={styles.button} 
              name='Sign up'
              textColor='white'
              onPress={()=> navigation.navigate('Tabs')}
            >
              Sign Up
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