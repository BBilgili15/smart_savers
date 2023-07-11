import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import ChallengeScreen from './ChallengeScreen';


  type ChallengeDashBoardScreenProps = {};

  const ChallengeDashBoardScreen: React.FC<ChallengeDashBoardScreenProps> = () => {
    
    const navigation = useNavigation();
  
    const launchDailyChallenge = () => {
      navigation.navigate('ChallengeScreen' as never);
    };
    
    

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