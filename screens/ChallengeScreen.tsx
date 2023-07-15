import {View, Text} from 'react-native'
import {useState} from 'react'
import React from 'react'

// Import Components
import AnswerCard from '../components/ChallengeScreen/AnswerCard';
import AnswerContainer from '../components/ChallengeScreen/AnswerContainer';
import QuestionContainer from '../components/ChallengeScreen/QuestionContainer';

  type ChallengeScreenProps = {};

  const ChallengeScreen: React.FC<ChallengeScreenProps> = () => {
    
   


  return (
    <View>
        <QuestionContainer question={"This is the question!"}/>
        <AnswerContainer/>
    </View>
  )
}

export default ChallengeScreen;