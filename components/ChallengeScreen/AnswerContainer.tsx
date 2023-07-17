import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {useState} from 'react'
import React from 'react'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

// Import Components
import AnswerCard from './AnswerCard';

  type AnswerContainerProps = {
  };

  const AnswerContainer: React.FC<AnswerContainerProps> = () => {

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
      // ADD POINTS TO USER HERE
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

      <AnswerCard answerText={"4 weeks"} handleButtonClick={handleWrongAnswer} backgroundColor='#ff6961'/>
      <AnswerCard answerText={"6 weeks"} handleButtonClick={handleRightAnswer} backgroundColor='#77dd77'/>
      <AnswerCard answerText={"8 weeks"} handleButtonClick={handleWrongAnswer} backgroundColor='#A7C7E7'/>
      <AnswerCard answerText={"10 weeks"} handleButtonClick={handleWrongAnswer} backgroundColor='#fdfd96'/>
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