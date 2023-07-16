import {View, Text} from 'react-native'
import {useState} from 'react'
import React from 'react'

// Import Components
import AnswerCard from '../components/ChallengeScreen/AnswerCard';
import AnswerContainer from '../components/ChallengeScreen/AnswerContainer';
import QuestionContainer from '../components/ChallengeScreen/QuestionContainer';

  type ChallengeScreenProps = {
    
  };

  const ChallengeScreen: React.FC<ChallengeScreenProps> = () => {
    
    


  return (
    <View>
        <QuestionContainer question={"Tom receives £5 as his weekly pocket money. He wants to save up to buy a video game that costs £30. How many weeks will it take for Tom to save enough money to buy the game?"}/>
        <AnswerContainer/>
    </View>
  )
}

export default ChallengeScreen;