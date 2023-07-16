import { View, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { FirebaseAuth } from "../FirebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateEmail, updateProfile } from "firebase/auth";

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FirebaseAuth;

  type FirebaseResponse = {
    _tokenResponse: {
      email: string;
      idToken: string;
    };
    user: {
      uid: string;
      displayName: string;
      email: string;
    };
  };
  
  //sign-in function, signs user in with method from auth object.
  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch(error: any) {
      console.log(error);
      alert('Login failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to send the Firebase user ID to the Spring backend
  const sendUserIdToBackend = async (firebaseResponse: FirebaseResponse, username: string, email: string) => {
    try {

      const payload = {
        firebaseUserId: firebaseResponse.user.uid,
        displayName: firebaseResponse.user.displayName,
        email: firebaseResponse._tokenResponse.email,
        username,
      };
  
      console.log('Payload:', payload);

      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firebaseUserId: firebaseResponse.user.uid,
        displayName: firebaseResponse.user.displayName,
        email:firebaseResponse._tokenResponse.email,
        username }),
      });

      if (response.ok) {
        console.log('Firebase user ID and user details sent to backend successfully');
      } else {
        console.log('Else Failed to send Firebase user ID and user details to backend', response.status, await response.text());
        console.log('Response Headers: ', response.headers);
      }
    } catch (error) {
      console.log(error);
      alert('error Failed to send Firebase user ID and user details to backend');
    }
  };

  //sign-up function signs up user from auth object
  const signUp = async () => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);

      // Update the user's display name with the child's name
      const user = auth.currentUser;
      if (user) {
        console.log("User: ", user);
        console.log("displayName: ", displayName);
        console.log("email: ", email);

        await updateProfile(user, {
          displayName: displayName,
        });

        await updateEmail(user, email);

        await user.reload();

        const firebaseResponse: FirebaseResponse = {
          _tokenResponse: {
            email: user.email || '',
            idToken: await userCredential.user.getIdToken(),
          },
          user: {
            uid: userCredential.user.uid,
            email: userCredential.user.email || '',
            displayName: user.displayName || '',
          },
        };

        // Send the Firebase user ID to the Spring backend
        await sendUserIdToBackend(firebaseResponse, displayName, email);
      }

      alert('Registration Successful');
    } catch(error: any) {
      console.log(error);
      alert('Registration failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container} >
      {/* keyboard avoiding view moves input for keyboard placement/visibility */}
      <KeyboardAvoidingView behavior="padding"> 
        <TextInput
          value={email}
          style={styles.input}
          placeholder="Parent Email"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          value={displayName}
          style={styles.input}
          placeholder="Child's Name"
          autoCapitalize="none"
          onChangeText={(text) => setDisplayName(text)}
        />
        <TextInput
          secureTextEntry={true}
          value={password}
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />
        {loading ? (
          <ActivityIndicator size="large" color="#35d0ba" />
        ) : (
          <>
            <Button title="Login" onPress={signIn} />
            <Button title="Register" onPress={signUp} />
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    marginVertical: 20,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff'
  }
});
