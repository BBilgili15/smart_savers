import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {useState} from 'react'
import React from 'react'

// Import Components
import AnswerCard from './AnswerCard';

  type AnswerContainerProps = {
  };

  const AnswerContainer: React.FC<AnswerContainerProps> = () => {


  


  return (
    <View style={styles.container}>
      <AnswerCard answerText={"Answer 1"}/>
      <AnswerCard answerText={"Answer 2"}/>
      <AnswerCard answerText={"Answer 3"}/>
      <AnswerCard answerText={"Answer 4"}/>
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