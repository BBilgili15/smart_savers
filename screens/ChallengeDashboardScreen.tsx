import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import ChallengeScreen from './ChallengeScreen';

// Import Components
import ChallengeContainer from '../components/ChallengeDashboardScreen/ChallengeContainer';
import StatsContainer from '../components/ChallengeDashboardScreen/StatsContainer';

  type ChallengeDashBoardScreenProps = {
    
  };

  const ChallengeDashBoardScreen: React.FC<ChallengeDashBoardScreenProps> = () => {

    
    

  return (
    <View style={styles.container}>
        {/* <StatsContainer/> */}
        <ChallengeContainer/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#beffb7'
  },
});

export default ChallengeDashBoardScreen