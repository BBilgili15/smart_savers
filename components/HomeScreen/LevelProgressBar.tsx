import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {useState} from 'react'
import React from 'react'

  type LevelProgressBarProps = {
    currentUser: any
  };

  const LevelProgressBar: React.FC<LevelProgressBarProps> = ({currentUser}) => {


    // COPY PROGRESS BAR IN POCKETS
  


  return (
    <View style={styles.container}>
      <Text>{currentUser ? currentUser.points : null} points / 100 points</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    width: 300,
    height: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    margin: 10,
  }
})

export default LevelProgressBar