import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import {useState} from 'react'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

  type ChallengeCardProps = {
  };

  const ChallengeCard: React.FC<ChallengeCardProps> = () => {

    const navigation = useNavigation();
  
    const launchDailyChallenge = () => {
      navigation.navigate('ChallengeScreen' as never);
    };

  


  return (
    <TouchableOpacity style={styles.container} onPress={() => launchDailyChallenge()}>
      <Text style={styles.text}>Daily Challenge</Text>
      <Image source={require('../../images/unchecked.png')} style={styles.image}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 400,
    height: 75,
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    margin: 10,
    flexDirection: 'row',
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 30,
    shadowColor: 'gray',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 5,
    shadowRadius: 4,
    borderColor: 'black',
    borderWidth: 2,
  }, 
  image: {
    height: 40,
    width: 40
  },
  text: {
    fontSize: 30,
  }
})

export default ChallengeCard