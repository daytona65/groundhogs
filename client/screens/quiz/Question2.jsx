import { React, useState} from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      paddingTop: 40,
      justifyContent: 'center',
      alignItems: 'center'
    },
    img: {
      width: '100%',
      height: '50%',
      marginBottom: 40,
    },
    text: {
      fontSize: 24,
      paddingBottom: 30,
      textAlign: 'center',
      paddingHorizontal: 20,
      marginBottom: 30
    },
    input: {
      marginBottom: 40,
      width: 300, 
    },
    nextBubble: {
      justifyContent: 'center', 
      alignItems: 'center', 
      borderRadius: 8, 
      width: 320, 
      height: 50,
    },
})

export default function Question2({navigation}) {

  const [text, onChangeText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>What is the biggest cause of climate change?</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Enter answer here..."
        />
        <Image
            style={styles.img}
            source={require('../../assets/nature/nature8.png')}
        />
        <TouchableOpacity 
            style={[{backgroundColor: text != '' ? '#ff6767' : '#b8b8b8'}, styles.nextBubble]}
            onPress={() => {
                if (text != '') {
                    navigation.navigate('EndQuiz');
                }
            }}>
            <Text style={styles.answerText}>Next</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}