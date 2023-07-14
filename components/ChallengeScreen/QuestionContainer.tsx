import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {useState} from 'react'
import React from 'react'

  type QuestionContainerProps = {
    question: String,
  };

  const QuestionContainer: React.FC<QuestionContainerProps> = ({question}) => {


  


  return (
    <View style={styles.container}>
      <Text>{question}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    width: 400,
    height: 400,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    margin: 10,
    
  }
})

export default QuestionContainer