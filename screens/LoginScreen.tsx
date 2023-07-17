import { View, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { FirebaseAuth } from "../FirebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FirebaseAuth;

  type FirebaseResponse = {
    _tokenResponse: {
      email: string;
      expiresIn: string;
      idToken: string;
    };
    user: {
      uid: string;
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
  const sendUserIdToBackend = async (firebaseResponse: FirebaseResponse) => {
    try {
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firebaseUserId: firebaseResponse.user.uid }),
      });

      if (response.ok) {
        console.log('Firebase user ID sent to backend successfully');
      } else {
        console.log('Failed to send Firebase user ID to backend');
      }
    } catch (error) {
      console.log(error);
      alert('Failed to send Firebase user ID to backend');
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
        await updateProfile(user, {
          displayName: username,
        });

        const firebaseResponse: FirebaseResponse = {
          _tokenResponse: {
            email: userCredential.user.email || '',
            expiresIn: '',
            idToken: await userCredential.user.getIdToken(),
          },
          user: {
            uid: userCredential.user.uid,
          },
        };

        // Send the Firebase user ID to the Spring backend
        await sendUserIdToBackend(firebaseResponse);
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
          value={username}
          style={styles.input}
          placeholder="Child's Name"
          autoCapitalize="none"
          onChangeText={(text) => setUsername(text)}
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

// Alternative Style

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     paddingHorizontal: 20,
//     backgroundColor: "#F8F8F8",
//   },
//   input: {
//     marginVertical: 10,
//     height: 50,
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     backgroundColor: "#FFFFFF",
//     borderColor: "#DDDDDD",
//     fontSize: 16,
//     color: "#333333",
//   },
//   button: {
//     marginTop: 20,
//     height: 50,
//     borderRadius: 8,
//     backgroundColor: "#007AFF",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   buttonText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#FFFFFF",
//   }
// });

