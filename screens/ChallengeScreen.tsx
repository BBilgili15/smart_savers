import {View, Text, ScrollView, StyleSheet } from 'react-native'
import {useState} from 'react'
import React from 'react'

// Import Components
import AnswerCard from '../components/ChallengeScreen/AnswerCard';
import AnswerContainer from '../components/ChallengeScreen/AnswerContainer';
import QuestionContainer from '../components/ChallengeScreen/QuestionContainer';


  type ChallengeScreenProps = {
    route:any;
    navigation:any;
    
  };

  const ChallengeScreen = ({route, navigation}: ChallengeScreenProps) => {
    const { currentUser, setCurrentUser } = route.params;
   

    console.log("CURRENT USER: ", currentUser)
    
    
  return (
    <ScrollView style={styles.container}>
        <QuestionContainer question={"Tom receives £5 as his weekly pocket money. He wants to save up to buy a video game that costs £30. How many weeks will it take for Tom to save enough money to buy the game?"}/>
        <AnswerContainer currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b7ffb7'
  },
});

export default ChallengeScreen;