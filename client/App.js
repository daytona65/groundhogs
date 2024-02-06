import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login, Home, Activity, Profile } from './screens';

import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()

const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: '#afbab2'
  },
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFBF4',
    alignItems: 'center',
    justifyContent: 'center',
    // width: Platform.OS == "ios" ? 50 : 60,
    // height: Platform.OS == "ios" ? 50 : 60,
    // top: Platform.OS == "ios" ? -10 : -20,
    // borderRadius: Platform.OS == "ios" ? 25 : 30
  },

  highlighted: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#057320'
  },

  default: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000'
  }

});

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({focused})=>{
            return (
              <View style={focused ? styles.highlighted: styles.default}> 
                <FontAwesome name="home" size={24} />
                <Text style={{fonSize: 12, color: "#16247d"}}>HOME</Text>
              </View>
            )
          }
        }}
        />
        <Tab.Screen 
        name="Activity" 
        component={Activity} 
        options={{
          tabBarIcon: ({focused})=>{
            return (
              <View style={focused ? styles.highlighted: styles.default}>
                <FontAwesome name="tree" size={24} />
                <Text style={{fonSize: 12, color: "#16247d"}}>ACTIVITY</Text>
              </View>
            )
          }
        }}
        />
        <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarIcon: ({focused})=>{
            return (
              <View style={focused ? styles.highlighted: styles.default}>
                <FontAwesome name="user" size={24} />
                <Text style={{fonSize: 12, color: "#16247d"}}>PROFILE</Text>
              </View>
            )
          }
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



