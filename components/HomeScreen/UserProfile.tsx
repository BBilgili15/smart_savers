import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'
import { getUser } from '../../services/UserServices';
import {useState, useEffect} from 'react'
import React from 'react'

  type UserProfileProps = {
    currentUser: any
  };

  const UserProfile: React.FC<UserProfileProps> = ({currentUser}) => {






  return (
      <View style={styles.container}>
        <Text style={styles.textSub}>{currentUser ? (currentUser.level === "ONE" ? "Savvy Spender" : "Test") : null}</Text>
        <Image source={require('../../images/owl.jpg')} style={styles.image}/>
        <Text style={styles.textMain}>Welcome {currentUser ? currentUser.displayName : null}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: 250,
    borderRadius: 15,
    margin: 25,
  }, 
  container: {
    // backgroundColor: 'lightpink',
    alignItems: 'center',
    margin: 20,
  }, 
  textMain: {
    // backgroundColor: 'lightblue',
    fontSize: 30,
  },
  textSub: {
    // backgroundColor: 'lightgreen',
    fontSize: 20,
  }
})

export default UserProfile