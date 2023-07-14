import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// Import Screens
import ChallengeDashboardScreen from './screens/ChallengeDashboardScreen';
import ChallengeScreen from './screens/ChallengeScreen';
import ChartsScreen from './screens/ChartsScreen';
import HomeScreen from './screens/HomeScreen';
import PocketsScreen from './screens/PocketsScreen';
import LoginScreen from './screens/LoginScreen';

import { getUser } from './services/UserServices';
import { getTransactionsByUserId } from './services/TransactionServices';


import { User, onAuthStateChanged } from '@firebase/auth';
import { FirebaseAuth } from './FirebaseConfig';

// Creating the stacks
const Stack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [userTransactions, setUserTransactions] = useState([]);

  // useEffect for user authentication
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (user) => {
      setUser(user);
    });
  }, []);

  // useEffect for fetching user data and transactions
  useEffect(() => {
    if (user) {
      getUser(1)
        .then((newUser) => setCurrentUser(newUser))
        .catch((error) => console.log('Error fetching user:', error));

      getTransactionsByUserId(1)
        .then((transactions) => setUserTransactions(transactions))
        .catch((error) => console.log('Error fetching transactions:', error));
    }
  }, [user]);

  // Creating the component for inside stack layout
  function InsideLayout() {
    return (
      <InsideStack.Navigator>
        <InsideStack.Screen name="bottomTabs" component={TabNavigator} options={{ headerShown: false }} />
      </InsideStack.Navigator>
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
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            tabBarActiveTintColor: 'orange',
            tabBarInactiveTintColor: 'purple',
          }}
        />
        <Tab.Screen
          name="DC"
          component={GamesHub}
          options={{
            tabBarLabel: 'GAME',
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="gamepad" color={color} size={size} />
            ),
            tabBarActiveTintColor: 'orange',
            tabBarInactiveTintColor: 'purple',
          }}
        />
        <Tab.Screen
          name="HT"
          component={Habits}
          options={{
            tabBarLabel: 'CHART',
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="barschart" color={color} size={size} />
            ),
            tabBarActiveTintColor: 'orange',
            tabBarInactiveTintColor: 'purple',
          }}
        />
        <Tab.Screen
          name="SG"
          component={Pockets}
          options={{
            tabBarLabel: 'POCKETS',
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="wallet" color={color} size={size} />
            ),
            tabBarActiveTintColor: 'orange',
            tabBarInactiveTintColor: 'purple',
          }}
        />
      </Tab.Navigator>
    );
  }

  // View Functions (Bottom Bar Tabs)
  function GamesHub() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="ChallengeDashBoardScreen"
          component={ChallengeDashboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChallengeScreen"
          component={ChallengeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  function Habits() {
    return <ChartsScreen currentUser={currentUser} userTransactions={userTransactions} />;
  }

  function Pockets() {
    return <PocketsScreen />;
  }

  function Home() {
    const [availableAmount, setAvailableAmount] = useState<number>(0);

    return (
      <HomeScreen
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        availableAmount={availableAmount}
        setAvailableAmount={setAvailableAmount}
      />
    );
  }

  return (

    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <LoginStack.Navigator initialRouteName="Login">
          {user ? (
            <LoginStack.Screen name="Inside" component={InsideLayout} options={{ headerShown: false }} />
          ) : (
            <LoginStack.Screen name="Login" component={LoginScreen} />
          )}
        </LoginStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});







// import { SafeAreaView, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { useEffect, useState } from 'react';


// import { User, onAuthStateChanged } from '@firebase/auth';
// import { FirebaseAuth } from './FirebaseConfig';


// import { InsideLayout, LoginStack } from './navigation/Navigation';
// import LoginScreen from './screens/LoginScreen';

// export default function App() {

//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     onAuthStateChanged(FirebaseAuth, (user) => {
//       setUser(user);
//     });
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <NavigationContainer>
//         <LoginStack.Navigator initialRouteName="Login">
//           {user ? (
//             <LoginStack.Screen name="Inside" component={InsideLayout} options={{ headerShown: false }} />
//           ) : (
//             <LoginStack.Screen name="Login" component={LoginScreen} />
//           )}
//         </LoginStack.Navigator>
//       </NavigationContainer>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });