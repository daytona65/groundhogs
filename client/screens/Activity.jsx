import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ActivityCard from '../components/ActivityCard';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100
  },
  cardContainer: {
    width: '100%', // Adjust the width as needed
    alignItems: 'center',
  },
  view: {
    height: 10
  }
});

export default function Activity() {
  return (
    <ScrollView style={styles.view}>
      <View style={styles.container}>
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />      
      </View>
    </ScrollView>
    
  );
}
