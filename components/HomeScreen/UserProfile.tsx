import {View, Text, TouchableOpacity} from 'react-native'
import { getUser } from '../../services/UserServices'
import {useState, useEffect} from 'react'
import React from 'react'

  type UserProfileProps = {
  };

  const UserProfile: React.FC<UserProfileProps> = () => {


    const [currentUser, setCurrentUser] = useState<{ 
      id: number, 
      userName: string, 
      parentEmail: string, 
      points: number, 
      level: any, 
      balance: number,
      displayName: string
    } | null> () ;

    useEffect( () => {
      getUser(1)
      .then(newUser => setCurrentUser(newUser))
    }, [])

  return (
    <View>
      <Text>User Profile</Text>
      <Text>{currentUser ? currentUser.userName : null}</Text>
      <Text>{currentUser ? currentUser.balance : null}</Text>
      <Text>{currentUser ? currentUser.points : null}</Text>
      <Text>{currentUser ? (currentUser.level === "ONE" ? "Super Saver" : "Test") : null}</Text>
     
    </View>
  )
}

export default UserProfile