import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {useState} from 'react'
import React from 'react'

  type StatsContainerProps = {
  };

  const StatsContainer: React.FC<StatsContainerProps> = () => {


  


  return (
    <View style={styles.container}>
      <Text>Stats & Streaks</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    width: 400,
    height: 300,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    margin: 10,
    
  }
})

export default StatsContainer