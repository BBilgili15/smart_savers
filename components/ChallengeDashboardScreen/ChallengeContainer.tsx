import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import {useState} from 'react'
import React from 'react'

// Import Components
import ChallengeCard from './ChallengeCard';

  type ChallengeContainerProps = {
  };

  const ChallengeContainer: React.FC<ChallengeContainerProps> = () => {

    const [completedDailyChallenge, setCompletedDailyChallenge] = useState(false);
    const [completedDailyChallenge1, setCompletedDailyChallenge1] = useState(false);
    const [completedDailyChallenge2, setCompletedDailyChallenge2] = useState(false);
  


  return (
    <ScrollView style={styles.container}>
      <ChallengeCard completedDailyChallenge={completedDailyChallenge} setCompletedDailyChallenge={() => setCompletedDailyChallenge(!completedDailyChallenge)}/>
      <ChallengeCard completedDailyChallenge={completedDailyChallenge1} setCompletedDailyChallenge={() => setCompletedDailyChallenge1(!completedDailyChallenge1)}/>
      <ChallengeCard completedDailyChallenge={completedDailyChallenge2} setCompletedDailyChallenge={() => setCompletedDailyChallenge2(!completedDailyChallenge2)}/>
    </ScrollView>
  )
}



const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'lightblue',
    width: 400,
    height: 600,
    alignSelf: 'center',
    // alignItems: 'center',
    margin: 10,
    
  }
})

export default ChallengeContainer