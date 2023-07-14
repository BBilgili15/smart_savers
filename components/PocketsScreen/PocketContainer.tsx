import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import {useState} from 'react'
import React from 'react'

// Import Components
import PocketCard from './PocketCard';

  type PocketContainerProps = {
    
  };

  const PocketContainer: React.FC<PocketContainerProps> = () => {


  


  return (
    <ScrollView style={styles.container}>
      <PocketCard/>
      <PocketCard/>
      <PocketCard/>
      <PocketCard/>
      <PocketCard/>
      <PocketCard/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'lightblue',
    width: 400,
    height: 600,
    alignSelf: 'center',
    // alignItems: 'center',
    margin: 10,
    
  }
})

export default PocketContainer