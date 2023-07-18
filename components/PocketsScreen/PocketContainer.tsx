import {View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList} from 'react-native'
import {useState} from 'react'
import React from 'react'

// Import Components
import PocketCard from './PocketCard';

  type PocketContainerProps = {
    currentUser: any
  };

  const PocketContainer: React.FC<PocketContainerProps> = ({currentUser}) => {


  const pocketCardComponents = currentUser.goals.map((goal: any) => {
    return (
      <PocketCard key={goal.goalId} goalName={goal.goalName} goalTarget={goal.targetAmount} amountSaved={goal.amountSaved} />
    )
  })
  


  return (
    <ScrollView style={styles.container}>
      {pocketCardComponents}
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