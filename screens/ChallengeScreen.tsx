import React from 'react';
import { View, Text } from 'react-native';

// Import Components
import AnswerContainer from '../components/ChallengeScreen/AnswerContainer';
import QuestionContainer from '../components/ChallengeScreen/QuestionContainer';
import { set } from 'firebase/database';

type ChallengeScreenProps = {
  currentUser: any;
  setCurrentUser: (user: any) => void;
  
};

const ChallengeScreen = ({ route, navigation, currentUser, setCurrentUser }) => {
  const { challenge } = route.params;

  // Check if the 'challenge' object is valid
  if (!challenge || !challenge.question) {
    // If the 'challenge' object is invalid or missing, handle the error
    return (
      <View>
        <Text>Error: Invalid challenge data</Text>
        <Text>Please go back to the previous screen and try again.</Text>
      </View>
    );
  }

  return (
    <View>
      <QuestionContainer question={challenge.question}/>
      <AnswerContainer challenge={challenge} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      {/* <Text>{challenge.question}</Text> */}
    </View>
  );
};

export default ChallengeScreen;