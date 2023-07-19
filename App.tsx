import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import ChallengeDashboardScreen from './screens/ChallengeDashboardScreen';
import ChallengeScreen from './screens/ChallengeScreen';
import ChartsScreen from './screens/ChartsScreen';
import HomeScreen from './screens/HomeScreen';
import PocketsScreen from './screens/PocketsScreen';
import LoginScreen from './screens/LoginScreen';


import { getUser } from './services/UserServices';
import { getTransactionsByUserId } from './services/TransactionServices';
import { getGoalsByUserId } from './services/GoalServices';

import Header from './components/Header';
import { User, onAuthStateChanged } from '@firebase/auth';
import { FirebaseAuth } from './FirebaseConfig';


// Creating the stacks
const Stack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

type AppProps = {};

export default function App(_: AppProps) {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [userTransactions, setUserTransactions] = useState([]);


  // Pocket State
  const [goals, setGoals] = useState(currentUser?.goals);

  // console.log("Goals (App) ", goals)

  useEffect(() => {
    
    if (currentUser) {
      console.log("Current User")
      console.log(goals.length)
      goals.length == 0 &&
          getGoalsByUserId(currentUser.id) 
          .then((goals) => setGoals(goals))
          .catch((error) => console.log('Error fetching goals:', error));
      } else {
        setGoals([])
        console.log("empty goals")
      }
    }, [currentUser?.goals, currentUser]);



  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (user) => {
      if (user) {
        getUser(user.uid)
          .then((newUser) => {
            setCurrentUser(newUser);
          })
          .catch((error) => console.log('Error fetching user:', error));
      } else {
        setCurrentUser(null);
      }
    });
  }, []);
  

useEffect(() => {
  if (currentUser)
      getTransactionsByUserId(currentUser.id) 
        .then((transactions) => setUserTransactions(transactions))
        .catch((error) => console.log('Error fetching transactions:', userTransactions));
  }, [currentUser]);


  // Creating the component for inside stack layout
  function InsideLayout() {
    return (
      <>
      <Header/>
        <InsideStack.Navigator>
          <InsideStack.Screen name="bottomTabs" component={TabNavigator} options={{ headerShown: false }} />
        </InsideStack.Navigator>
      </>
    );
  }

  // Creating the bottom tab navigator & view functions
  const Tab = createBottomTabNavigator();

  function TabNavigator() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="HO"
          component={Home}
          options={{
            tabBarLabel: 'HOME',
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={45} />
            ),
            tabBarActiveTintColor: 'orange',
            tabBarInactiveTintColor: 'purple',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="DC"
          options={{
            tabBarLabel: 'GAME',
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="gamepad" color={color} size={45} />
            ),
            tabBarActiveTintColor: 'orange',
            tabBarInactiveTintColor: 'purple',
            headerShown: false,
          }}>
          {(props) => <GamesHub {...props} currentUser={currentUser} setCurrentUser={setCurrentUser} />}
        </Tab.Screen>
        <Tab.Screen
          name="HT"
          component={Habits}
          options={{
            tabBarLabel: 'CHART',
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <AntDesign name="barschart" color={color} size={45} />
            ),
            tabBarActiveTintColor: 'orange',
            tabBarInactiveTintColor: 'purple',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="SG"
          component={Pockets}
          options={{
            tabBarLabel: 'POCKETS',
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="wallet" color={color} size={45} />
            ),
            tabBarActiveTintColor: 'orange',
            tabBarInactiveTintColor: 'purple',
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    );
  }

  // View Functions (Bottom Bar Tabs)
  function GamesHub({ currentUser, setCurrentUser }) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="ChallengeDashBoardScreen"
          component={ChallengeDashboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChallengeScreen"
          options={{ headerShown: false }}
        >
          {(props) => <ChallengeScreen {...props} currentUser={currentUser} setCurrentUser={setCurrentUser} />}
        </Stack.Screen>
      </Stack.Navigator>
    );
  }

  function Habits() {
    return <ChartsScreen currentUser={currentUser} userTransactions={userTransactions} />;
  }

  function Pockets() {
    return <PocketsScreen currentUser={currentUser} goals={goals} setGoals={setGoals} />;
  }

  function Home() {
    const [availableAmount, setAvailableAmount] = useState<number>(0);

    return (
      <HomeScreen
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        availableAmount={availableAmount}
        setAvailableAmount={setAvailableAmount}
        userTransactions={userTransactions}
        setUserTransactions={setUserTransactions}
        goals={goals}
        setGoals={setGoals}

      />
    );
  }

  return (

    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <LoginStack.Navigator initialRouteName="Login">
          {currentUser ? (
            <>
            <LoginStack.Screen name="Inside" component={InsideLayout} options={{ headerShown: false }} />
            </>
          ) : (
            <LoginStack.Screen
              name="Smart Savers Login"
              options={{ headerShown: false }}>
              {(props) => (
                <LoginScreen {...props} setCurrentUser={setCurrentUser} />
              )}
            </LoginStack.Screen>

          )}
        </LoginStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FDE9B1', // Pastel yellow color
  },
});



