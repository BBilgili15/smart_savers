import {View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList} from 'react-native'
import {useEffect, useState} from 'react'
import React from 'react'

import { deleteGoal } from '../../services/GoalServices';

// Import Components
import PocketCard from './PocketCard';

  type PocketContainerProps = {
    currentUser: any
    goals: any
    setGoals: (param: any) => void;
  };

  const PocketContainer: React.FC<PocketContainerProps> = ({currentUser, goals, setGoals}) => {


  console.log("Goals (Container) ", goals);

  const removeGoal = async (id: number) => {
    try {
      await deleteGoal(id);

    setGoals((goals: any) => {
      return goals.filter((goal: any) => goal.id !== id);
    });
  } catch (error) {
    console.error("Failed to delete goal: ", error);
  }
};

  

const pocketCardComponents = goals?.length > 0 ? goals.map((goal: any) => {
    console.log("KEY: ", goal.id)

    const key = goal.id ? goal.id : `new-goal-${Date.now()}`;


    return (
      <PocketCard 
      key={key} 
      id={goal.id} 
      goalName={goal.goalName} 
      goalTarget={goal.targetAmount} 
      amountSaved={goal.amountSaved} 
      removeGoal={removeGoal}
      />
    )
  }) : null;

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