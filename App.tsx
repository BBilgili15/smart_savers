import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// Import Screens
import Header from './components/Header';
import { getUser } from './services/UserServices';
import {getTransactionsByUserId} from './services/TransactionServices'
import { useEffect, useState } from 'react';



import { User, onAuthStateChanged } from '@firebase/auth';
import { FirebaseAuth } from './FirebaseConfig';

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


import { InsideLayout, LoginStack } from './navigation/Navigation';
import LoginScreen from './screens/LoginScreen';

export default function App() {

  const [user, setUser] = useState<User | null>(null);


  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (user) => {
      setUser(user);
    });
  }, []);


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