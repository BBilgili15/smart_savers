import {View, Text, TouchableOpacity} from 'react-native'
import {useState} from 'react'
import React from 'react'
import { useNavigation } from '@react-navigation/native';



  type ChallengeDashBoardScreenProps = {};



  const ChallengeDashBoardScreen: React.FC<ChallengeDashBoardScreenProps> = () => {
    
    const navigation = useNavigation();
  
    const launchDailyChallenge = () => {
      navigation.navigate('ChallengeScreen', {});
    }
    

  return (
    <View>
        <Text>Stats and Streaks</Text>
        <TouchableOpacity onPress={launchDailyChallenge}>
          <Text>Button to launch game</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ChallengeDashBoardScreen