import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import ChallengeScreen from './ChallengeScreen';

// Import Components
import ChallengeContainer from '../components/ChallengeDashboardScreen/ChallengeContainer';
import StatsContainer from '../components/ChallengeDashboardScreen/StatsContainer';

  type ChallengeDashBoardScreenProps = {};

  const ChallengeDashBoardScreen: React.FC<ChallengeDashBoardScreenProps> = () => {
    
    const navigation = useNavigation();
  
    const launchDailyChallenge = () => {
      navigation.navigate('ChallengeScreen' as never);
    };
    
    

  return (
    <View>
        <StatsContainer/>
        <ChallengeContainer/>
    </View>
  )
}

export default ChallengeDashBoardScreen