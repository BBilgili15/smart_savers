import {View, StyleSheet} from 'react-native'
import {useState} from 'react'
import React from 'react'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

// Import Components
import AnswerCard from './AnswerCard';
import { updateUser } from '../../services/UserServices';

  type AnswerContainerProps = {
    challenge: {
      question: string;
      correctAnswer: string;
      wrongAnswer1: string;
      wrongAnswer2: string;
      wrongAnswer3: string;
    };
    currentUser: any;
    setCurrentUser: any;
  };

  const AnswerContainer: React.FC<AnswerContainerProps> = ({challenge, currentUser, setCurrentUser}) => {

    // Navigate
    const navigation = useNavigation();

    const launchDailyChallenge = () => {
      navigation.navigate('ChallengeScreen' as never);
    };

    // Wrong Animation
    const [showIncorrectAnimation, setShowIncorrectAnimation] = useState(false);

    const handleWrongAnswer = () => {
      setShowIncorrectAnimation(true);
    };
  
    const onWrongAnimationFinish = () => {
      setShowIncorrectAnimation(false);
    };

    // Right Animation
    const [showCorrectAnimation, setShowCorrectAnimation] = useState(false);

    const handleRightAnswer = () => {
      setShowCorrectAnimation(true);
    };

  
    const onRightAnimationFinish = () => {
      setShowCorrectAnimation(false);
      navigation.navigate('ChallengeDashBoardScreen' as never);

      const updatedPoints = currentUser.points +25;
        let updatedLevel = currentUser.level;

    if (updatedPoints >= 50 && currentUser.level == "ONE") {
      updatedLevel = "TWO";
    } else if (updatedPoints >= 100 && currentUser.level == "TWO") {
      updatedLevel = "THREE";
    }

      const updatedUser = {
        ...currentUser,
      points: updatedPoints,
      level: updatedLevel
    };

      updateUser(updatedUser, currentUser.id)
      .then(() => {
        setCurrentUser(updatedUser);
        navigation.navigate('HO')
      })
      
      .catch(error => {
        console.error("Failed to update user: ", error);
      })

      // Toastify points
    };

  return (
    <View style={styles.container}>

        {showIncorrectAnimation && (
        <LottieView
          source={require('../../animations/incorrect.json')}
          autoPlay
          loop={false}
          onAnimationFinish={onWrongAnimationFinish}
          style={{zIndex: 1}}
        />)}
        {showCorrectAnimation && (
        <LottieView
          source={require('../../animations/success.json')}
          autoPlay
          loop={false}
          onAnimationFinish={onRightAnimationFinish}
          style={{zIndex: 1}}
        />)}

      <AnswerCard answerText={challenge.wrongAnswer1} handleButtonClick={handleWrongAnswer} backgroundColor='#f15c55'/>
      <AnswerCard answerText={challenge.correctAnswer} handleButtonClick={handleRightAnswer} backgroundColor='#35d0ba'/>
      <AnswerCard answerText={challenge.wrongAnswer2} handleButtonClick={handleWrongAnswer} backgroundColor='#ff9234'/>
      <AnswerCard answerText={challenge.wrongAnswer3} handleButtonClick={handleWrongAnswer} backgroundColor='#ffcd3c'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'lightpink',
    width: 400,
    height: 250,
    alignSelf: 'center',
    margin: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingLeft: 5,
  }
})

export default AnswerContainer