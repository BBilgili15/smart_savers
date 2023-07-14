import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';


import { User, onAuthStateChanged } from '@firebase/auth';
import { FirebaseAuth } from './FirebaseConfig';


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