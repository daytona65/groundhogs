import { ImageBackground, Pressable, StyleSheet, View } from 'react-native'
import { Card, Text } from 'react-native-paper';
import { COLORS } from '../constants/theme';
import React from 'react'

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const barHeight = 50;
const barWidth = 300;

export default function ProgressCard ({ 
    title = 'Joy of Harvesting', 
    url = 'https://groundupinitiative.org/wp-content/uploads/2023/11/2023-11-17-13.12.38.jpg', 
    completed = 7, 
    total = 10 }) {
  const progress = completed / total * barWidth;
  return (
    <Pressable>
      <View style={styles.container}>
        <Card mode='elevated' style={styles.card} onPress>
            <View style={ { height: barHeight, width: progress, overflow: 'hidden', borderRadius: 10}}>
                <ImageBackground 
                    source={{ uri: {url}}} 
                    imageStyle={styles.image}>
                </ImageBackground>
            </View>
            <Text  style={{position: 'absolute', marginTop: 15, marginLeft: 70, color: 'white'}}>{title}      {completed}/{total}</Text> 
        </Card>
    </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    card: {
      width: barWidth,
      height: barHeight,
      overflow: 'hidden',
      backgroundColor: COLORS.secondary

    },

    tab: {
      alignItems: 'center',
      justifyContent: 'center',
    },

    image: {
        width: 400,
        height: 100,
        opacity: 0.5,
        borderRadius: 5,
        position: 'relative',
        alignItems: 'baseline',
        justifyContent: 'center',
    }
  
  });