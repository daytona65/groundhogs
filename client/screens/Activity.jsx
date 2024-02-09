import { View, Text, StyleSheet } from 'react-native';
import ActivityCard from '../components/ActivityCard';
import React from 'react';

export default function Activity() {
  return (
    <View style={styles.container}>
      <ActivityCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width: '100%', // Adjust the width as needed
    alignItems: 'center',
  },
});