import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import {useState} from 'react'
import React from 'react'

  type QuestionContainerProps = {
    question: String,
  };

  const QuestionContainer: React.FC<QuestionContainerProps> = ({question}) => {


  


  return (
    <View style={styles.container}>
      <Image source={require('../../images/dc-image.jpg')} style={styles.image}/>
      <Text style={styles.text}>{question}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'lightblue',
    width: 400,
    height: 400,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    margin: 10, 
    marginBottom: 40,
  }, 
  image: {
    height: 275,
    width: 275,
    borderRadius: 15,
    margin: 25,
  }, 
  text: {
    fontSize: 20,
  }
})

export default QuestionContainer