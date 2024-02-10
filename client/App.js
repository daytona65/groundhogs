import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Tabs from './Tabs';
import Register from './Register';
import axios from 'axios';

import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { COLORS } from './constants/theme';

axios.defaults.withCredentials = true;
const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFBF4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tab: {
    alignItems: 'center',
    justifyContent: 'center',
  }

});

const screenOptions = {
  headerShown: false,
}

export default function App() {
  return (
    <NavigationContainer style={styles.container} independent={true}>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}