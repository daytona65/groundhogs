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
      height: '60%',
      marginBottom: 40,
    },
    text: {
      fontSize: 36,
      textAlign: 'center',
      paddingHorizontal: 20,
    },
})

export default function EndQuiz({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <Image
            style={styles.img}
            source={require('../../assets/nature/nature2.png')}
        />
        <Text style={styles.text}>Thanks for answering!</Text>
    </SafeAreaView>
  )
}