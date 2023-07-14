import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {useState} from 'react'
import React from 'react'

  type PocketCardProps = {
    
  };

  const PocketCard: React.FC<PocketCardProps> = () => {


  


  return (
    <View style={styles.container}>
      <View style={styles.savingBar}><Text>Progress Bar</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 375,
    height: 150,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    alignItems: 'center',
    margin: 10,
    shadowColor: 'gray',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 5,
    shadowRadius: 4,
    borderRadius: 10,
    // borderColor: 'black',
    // borderWidth: 2,
  }, 
  savingBar: {
    width: 375,
    height: 50,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  }
})

export default PocketCard