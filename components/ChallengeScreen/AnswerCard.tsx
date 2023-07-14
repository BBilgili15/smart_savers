import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {useState} from 'react'
import React from 'react'

  type AnswerCardProps = {
    answerText: String,
  };

  const AnswerCard: React.FC<AnswerCardProps> = ({answerText}) => {


  


  return (
    <TouchableOpacity style={styles.container}>
      <Text>{answerText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgreen',
    width: 175,
    height: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    margin: 10,
    shadowColor: 'gray',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 5,
    shadowRadius: 4,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
  }
})

export default AnswerCard