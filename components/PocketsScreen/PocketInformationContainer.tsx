import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {useState} from 'react'
import React from 'react'

  type PocketInformationContainerProps = {
    handleButtonClick: () => void;
  };

  const PocketInformationContainer: React.FC<PocketInformationContainerProps> = ({handleButtonClick}) => {


  


  return (
    <View style={styles.container}>
      <Text style={styles.balanceText}>£67.98</Text>
      <TouchableOpacity style={styles.button} onPress={() => {handleButtonClick()}}>
        <Text>New Pocket + </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgreen',
    width: 400,
    height: 200,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    alignItems: 'center',
    margin: 10,
    // flexDirection: 'row',
  }, 
  button: {
    borderColor: 'black',
    backgroundColor: 'lightpink',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  }, 
  balanceText: {
    fontSize: 30,
  }
})

export default PocketInformationContainer