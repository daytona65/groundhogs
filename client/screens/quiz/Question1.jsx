import { React, useState} from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'

const QUIZ_COLORS = {
    default: "#403521",
    highlight: "#fea800"
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: '55%',
    height: '55%',
    marginBottom: 50,
  },
  text: {
    fontSize: 24,
    paddingBottom: 30,
    textAlign: 'center',
    paddingHorizontal: 20
  },
  answerText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center' 
  },
  answerBubble: {
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 8, 
    width: 270, 
    height: 35,
    marginBottom: 15
  },
  answerContainer: {
    flex: 1, 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    marginHorizontal: 16,
    marginBottom: 50
  },
  bottomContainer: {
    display: 'flex',
    paddingTop: 50,
    flex: 1
  },
  nextBubble: {
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 8, 
    width: 320, 
    height: 50,
  }
});

export default function Question1({navigation}) {
  const [button, setButton] = useState("");
  
  return (
    <View style={styles.container}>
        <Text style={styles.text}>What is the average carbon footprint of someone in Singapore?</Text>
        <Image
            style={styles.img}
            source={require('../../assets/nature/nature7.png')}
        />
        <SafeAreaView style={styles.answerContainer}>
            <TouchableOpacity 
                style={[{backgroundColor: button === 'button1' ? QUIZ_COLORS.highlight : QUIZ_COLORS.default}, styles.answerBubble]}
                onPress={() => setButton('button1')}>
                <Text style={styles.answerText}>4 tons</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[{backgroundColor: button === 'button2' ? QUIZ_COLORS.highlight : QUIZ_COLORS.default}, styles.answerBubble]}
                onPress={() => setButton('button2')}>
                <Text style={styles.answerText}>8 tons</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[{backgroundColor: button === 'button3' ? QUIZ_COLORS.highlight : QUIZ_COLORS.default}, styles.answerBubble]}
                onPress={() => setButton('button3')}>
                <Text style={styles.answerText}>16 tons</Text>
            </TouchableOpacity>
        </SafeAreaView>
        <View styles={styles.bottomContainer}>
            <TouchableOpacity 
                style={[{backgroundColor: button === 'button1' || button === 'button2' || button === 'button3' ? '#ff6767' : '#b8b8b8'}, styles.nextBubble]}
                onPress={() => {
                    if (button === 'button1' || button === 'button2' || button === 'button3') {
                        navigation.navigate('Question2');
                    }
                }}>
                <Text style={styles.answerText}>Next</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}