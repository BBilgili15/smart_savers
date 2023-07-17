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
import Header from './components/Header';


import { getUser } from './services/UserServices';
import { getTransactionsByUserId } from './services/TransactionServices';


import { User, onAuthStateChanged } from '@firebase/auth';
import { FirebaseAuth } from './FirebaseConfig';

// Creating the stacks
const Stack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

export default function App() {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [currentUser, setCurrentUser] = useState(null);
  // const [userTransactions, setUserTransactions] = useState([]);


// ZHU DUMMY DATA

const [userTransactions, setUserTransactions]=useState(
  [
    {
      "id": 1,
      "category": "EARNINGS",
      "amount": 20.0,
      "user": {
        "id": 1,
        "userName": "Ben",
        "parentEmail": "parent@test.com",
        "points": 0,
        "level": "ONE",
        "balance": 85.0
      }
    },
    {
      "id": 2,
      "category": "POCKET_MONEY",
      "amount": 10.0,
      "user": {
        "id": 1,
        "userName": "Ben",
        "parentEmail": "parent@test.com",
        "points": 0,
        "level": "ONE",
        "balance": 85.0
      }
    },
    {
      "id": 3,
      "category": "GIFT",
      "amount": 50.0,
      "user": {
        "id": 1,
        "userName": "Ben",
        "parentEmail": "parent@test.com",
        "points": 0,
        "level": "ONE",
        "balance": 85.0
      }
    },
    {
      "id": 4,
      "category": "OTHER_INCOME",
      "amount": 80.0,
      "user": {
        "id": 1,
        "userName": "Ben",
        "parentEmail": "parent@test.com",
        "points": 0,
        "level": "ONE",
        "balance": 85.0
      }
    },
    {
      "id": 5,
      "category": "ENTERTAINMENT",
      "amount": 40.0,
      "user": {
        "id": 1,
        "userName": "Ben",
        "parentEmail": "parent@test.com",
        "points": 0,
        "level": "ONE",
        "balance": 85.0
      }
    },
    {
      "id": 6,
      "category": "SHOPPING",
      "amount": 10.0,
      "user": {
        "id": 1,
        "userName": "Ben",
        "parentEmail": "parent@test.com",
        "points": 0,
        "level": "ONE",
        "balance": 85.0
      }
    },
    {
      "id": 7,
      "category": "TRANSPORT",
      "amount": 6.0,
      "user": {
        "id": 1,
        "userName": "Ben",
        "parentEmail": "parent@test.com",
        "points": 0,
        "level": "ONE",
        "balance": 85.0
      }
    },
    {
      "id": 8,
      "category": "FOOD",
      "amount": 7.0,
      "user": {
        "id": 1,
        "userName": "Ben",
        "parentEmail": "parent@test.com",
        "points": 0,
        "level": "ONE",
        "balance": 85.0
      }
    },
    {
      "id": 9,
      "category": "OTHER_SPEND",
      "amount": 12.0,
      "user": {
        "id": 1,
        "userName": "Ben",
        "parentEmail": "parent@test.com",
        "points": 0,
        "level": "ONE",
        "balance": 85.0
      }
    },
    {
      "id": 10,
      "category": "FOOD",
      "amount": 10.0,
      "user": {
        "id": 2,
        "userName": "Julie",
        "parentEmail": "parent@test.com",
        "points": 0,
        "level": "ONE",
        "balance": -10.0
      }
    },
    {
      "id": 11,
      "category": "FOOD",
      "amount": 90.0,
      "user": {
        "id": 1,
        "userName": "Ben",
        "parentEmail": "parent@test.com",
        "points": 0,
        "level": "ONE",
        "balance": 85.0
      }
    }
  ])
















  // useEffect for user authentication
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (user) => {
      if (!user) setCurrentUser(null)
      console.log("User in App: ", user)
      getUser(user.uid)
        .then((newUser) => {
          console.log({newUser})
          setCurrentUser(newUser)
        })
        .catch((error) => console.log('Error fetching user:', error));
    });
  }, []);


  // useEffect for fetching user data and transactions
  // useEffect(() => {
  //   if (firebaseUser) {
  //     getUser("TnP6BPAOI1RUJQiAYKoHfWDauIS2")
  //       .then((newUser) => setCurrentUser(newUser))
  //       .catch((error) => console.log('Error fetching user:', error));
  //   }
  // }, [firebaseUser]);
  console.log("This is the currentUser: ", currentUser)
  // console.log("EMAIL: ", firebaseUser.email)

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
          component={GamesHub}
          options={{
            tabBarLabel: 'GAME',
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="gamepad" color={color} size={45} />
            ),
            tabBarActiveTintColor: 'orange',
            tabBarInactiveTintColor: 'purple',
            headerShown: false,
          }}
        />
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
          {currentUser ? (
            <LoginStack.Screen name="Inside" component={InsideLayout} options={{ headerShown: false }} />
          ) : (
            <LoginStack.Screen name="Login" component={LoginScreen} initialParams={{setCurrentUser}}/>

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