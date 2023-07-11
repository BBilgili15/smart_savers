import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// Import Screens
import ChallengeDashBoardScreen from './screens/ChallengeDashboardScreen';
import ChallengeScreen from './screens/ChallengeScreen';
import ChartsScreen from './screens/ChartsScreen';
import HomeScreen from './screens/HomeScreen';
import PocketsScreen from './screens/PocketsScreen';


export default function App() {

  //create stack
const Stack = createNativeStackNavigator();

  //create bottom tab
const Tab = createMaterialBottomTabNavigator();


// States
const [availableAmount, setAvailableAmount] = useState<number>(0);


// View Functions (Bottom Bar Navigation)
function GamesHub(){
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ChallengeDashBoardScreen" 
        component={ChallengeDashBoardScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="ChallengeScreen" 
        component={ChallengeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
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
      <SafeAreaView style={styles.container}>
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
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

