import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Question1 from './quiz/Question1';
import Question2 from './quiz/Question2';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
});

const screenOptions = {
  headerShown: false,
}

const Stack = createStackNavigator();

export default function Quiz() {
  return (
    <NavigationContainer style={styles.container} independent={true}>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Question1" component={Question1} />
        <Stack.Screen name="Question2" component={Question2} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}