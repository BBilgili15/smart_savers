import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// Import Screens
import ChallengeDashBoardScreen from './screens/ChallengeDashboardScreen';
import ChallengeScreen from './screens/ChallengeScreen';
import ChartsScreen from './screens/ChartsScreen';
import HomeScreen from './screens/HomeScreen';
import PocketsScreen from './screens/PocketsScreen';
import Header from './components/Header';
import { getUser } from './services/UserServices';
import {getTransactionsByUserId} from './services/TransactionServices'



export default function App() {

  //create stack
const Stack = createNativeStackNavigator();

  //create bottom tab
const Tab = createBottomTabNavigator();


// States
const [availableAmount, setAvailableAmount] = useState<number>(0);
const [currentUser, setCurrentUser] = useState(null);
const [userTransactions, setUserTransactions]=useState([])


// useEffect

useEffect(() => {
  getUser(1)
    .then(newUser => setCurrentUser(newUser))
}, []);

useEffect(() => {
  if (currentUser) {
    getTransactionsByUserId(1)
    // getTransactionsByUserId(currentUser.id) error: Property 'id' does not exist on type 'never'.ts(2339)
      .then(transactions => setUserTransactions(transactions))
      .catch(error => {
        console.log("Error fetching transactions:", error);
      });
  }
}, [currentUser]);
// testing: 

console.log("Current user:", currentUser);
console.log("Current transaction", userTransactions);


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
    <ChartsScreen  currentUser={currentUser} userTransactions={userTransactions}/>
  )
}

function Pockets(){
  return (
    <PocketsScreen/>
  )
}

function Home() {
  return (
    <HomeScreen
      currentUser={currentUser}
      availableAmount={availableAmount}
      setAvailableAmount={setAvailableAmount}
    />
  );
}



  return (
    <>

      <SafeAreaView style={styles.container} >
        <NavigationContainer>
          <Header/>
          {/* //stack.navigator - initial screen = login
          //stack.screen
          //check if user
          //if yes take to home */}
          {/* <HomeScreen/> */}
            <Tab.Navigator>
                <Tab.Screen name="HO" component={Home} options={{
                  headerShown: false,
                  tabBarLabel: 'HOME',
                  tabBarShowLabel: false,
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={55} />),
                    tabBarActiveTintColor:'#f15c55',
                    tabBarInactiveTintColor:  '#ffcd3c',
                    tabBarIconStyle: { fontSize: 80 },
                    tabBarInactiveBackgroundColor:'#35d0ba',
                    tabBarActiveBackgroundColor:'#35d0ba'
                    // tabBarBackground:'#35d0ba'
                  
                }}/>
                <Tab.Screen name="DC" component={GamesHub} options={{
                  headerShown: false,
                  tabBarLabel: 'GAME',
                  tabBarShowLabel: false,
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="gamepad" color={color} size={55} />
                  ),
                  tabBarActiveTintColor:'#f15c55',
                  tabBarInactiveTintColor:  '#ffcd3c',
                  tabBarInactiveBackgroundColor:'#35d0ba',
                  tabBarActiveBackgroundColor:'#35d0ba'
                  // tabBarIconStyle: { fontSize: 40 }
                }}/>
                <Tab.Screen name="HT" component={Habits} options={{
                  headerShown: false,
                  tabBarLabel: 'CHART',
                  tabBarShowLabel: false,
                  tabBarIcon: ({ color, size }) => (
                    <AntDesign name="barschart" color={color} size={55} />
                  ),
                  tabBarActiveTintColor:'#f15c55',
                  tabBarInactiveTintColor:  '#ffcd3c',
                  tabBarInactiveBackgroundColor:'#35d0ba',
                  tabBarActiveBackgroundColor:'#35d0ba'
                  // tabBarIconStyle: { fontSize: 40 }
                }}/>
                <Tab.Screen name="SG" component={Pockets} options={{
                  headerShown: false,
                  tabBarLabel: 'POCKETS',
                  tabBarShowLabel: false,
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="wallet" color={color} size={55}  />
                  ),
                  tabBarActiveTintColor:'#f15c55',
                  tabBarInactiveTintColor:  '#ffcd3c',
                  tabBarInactiveBackgroundColor:'#35d0ba',
                  tabBarActiveBackgroundColor:'#35d0ba'
                  // tabBarIconStyle: { fontSize: 40 }
                }}/>
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

