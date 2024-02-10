import { ImageBackground, Pressable, StyleSheet, View } from 'react-native'
import { Card, Text } from 'react-native-paper';
import { COLORS } from '../constants/theme';
import React from 'react'

const barHeight = 50;
const barWidth = 300;

export default function ProgressCard ({ 
    title = 'Joy of Harvesting', 
    url = 'https://groundupinitiative.org/wp-content/uploads/2023/11/2023-11-17-13.12.38.jpg', 
    completed = 7, 
    total = 10 }) {
  const progress = completed / total * barWidth;
  return (
      <View style={styles.container}>
        <Card mode='elevated' elevation={4} style={styles.card}>
            <View style={ { height: barHeight, width: progress, overflow: 'hidden', borderRadius: 10}}>
                <ImageBackground 
                    source={{ uri: url}} 
                    imageStyle={styles.image}>
                </ImageBackground>
            </View>
            <View style={styles.background} />
            <Text style={styles.text}>{title}      {completed}/{total}</Text> 
        </Card>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },

    background: {
      backgroundColor: COLORS.gray, // semi-opaque black background
      opacity: 0.5,
      position: 'absolute', 
      width: 180,
      marginTop: 15, 
      marginLeft: 60, 
      padding: 10,
      borderRadius: 6,
      zIndex: 0
    },

    text: {
      color: 'white',
      position: 'absolute', 
      marginTop: 15, 
      marginLeft: 70, 
    },

    card: {
      width: barWidth,
      height: barHeight,
      overflow: 'hidden',
      backgroundColor: COLORS.secondary,
      shadowRadius: 500,
    },

    tab: {
      alignItems: 'center',
      justifyContent: 'center',
    },

    image: {
        width: 400,
        height: 100,
        opacity: 0.8,
        borderRadius: 5,
        position: 'relative',
        alignItems: 'baseline',
        justifyContent: 'center',
    }
  
  });