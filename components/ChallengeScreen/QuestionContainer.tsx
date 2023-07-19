import {View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'

  type QuestionContainerProps = {
    question: string,
  };

  const QuestionContainer: React.FC<QuestionContainerProps> = ({question}) => {


  return (
    <View style={styles.container}>
      <Image source={require('../../images/dc-image.jpg')} style={styles.image}/>
      <View style={styles.questionBackground}>
        <Text style={styles.text}>{question}</Text>
      </View>
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
    marginBottom: 45,
  }, 
  questionBackground: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginBottom: 15,
  },
  image: {
    height: 250,
    width: 250,
    borderRadius: 15,
    // margin: 35,
    marginTop: 50,
    marginBottom: 20,
  }, 
  text: {
    fontSize: 17,
    textAlign: 'center',
    fontFamily: 'OpenDyslexic-Regular',
  }
})

export default QuestionContainer;