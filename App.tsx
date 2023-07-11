import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,  } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// Import Screens
import HomeScreen from './screens/HomeScreen';
import ChallengeScreen from './screens/ChallengeDashboardScreen';
import ChartsScreen from './screens/ChartsScreen';
import PocketsScreen from './screens/PocketsScreen';


export default function App() {

  //create bottom tab
const Tab = createMaterialBottomTabNavigator();

// States
const [availableAmount, setAvailableAmount] = useState<number>(0);


// View Functions (Bottom Bar Navigation)
function GamesHub(){
  return (
    <ChallengeScreen/>
  )
}

function Habits(){
  return (
    <ChartsScreen/>
  )
}

function Pockets(){
  return (
    <PocketsScreen/>
  )
}

function Home(){
  return (
    <HomeScreen availableAmount={availableAmount} setAvailableAmount={setAvailableAmount}/>
  )
}


  return (
    <>
      <SafeAreaView>

      </SafeAreaView>
      <NavigationContainer>
        {/* //stack.navigator - initial screen = login
        //stack.screen
        //check if user
        //if yes take to home */}
        {/* <HomeScreen/> */}
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#edf6ed"
          inactiveColor="#3E2465"
          barStyle={{ backgroundColor: '#694FAD' }}>
            <Tab.Screen name="HO" component={Home}/>
            <Tab.Screen name="DC" component={GamesHub}/>
            <Tab.Screen name="HT" component={Habits}/>
            <Tab.Screen name="SG" component={Pockets}/>
        </Tab.Navigator>
        {/* //if no take to login page
        //end of stack navigator */}
      </NavigationContainer>
    </>
  );
}

