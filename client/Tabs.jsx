import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Progress, Activity, Quiz } from './screens';

import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { COLORS } from './constants/theme';

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: '#afbab2',
  },
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Dashboard') {
      iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === 'Activities') {
      iconName = focused ? 'extension-puzzle' : 'extension-puzzle-outline';
    } else if (route.name === 'Games') {
      iconName = focused ? 'game-controller' : 'game-controller-outline';
    }
    
    return ( 
      <View style={styles.tab}>
          <Ionicons name={iconName} size={size} color={color} /> 
          <Text style={{fontSize: 12}}>{route.name}</Text>
      </View>
    );
  },
  tabBarActiveTintColor: COLORS.primary,
  tabBarInactiveTintColor: 'black'
})

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

export default function Tabs() {
  return (
    <NavigationContainer style={styles.container} independent={true}>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Dashboard" component={Progress} />
        <Tab.Screen name="Activities" component={Activity} />
        <Tab.Screen name="Games" component={Quiz} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}