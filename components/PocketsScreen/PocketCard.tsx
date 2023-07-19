import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';

type PocketCardProps = {
  id: number;
  goalName: string;
  goalTarget: number;
  amountSaved: number;
  removeGoal: (param: any) => void;
};

const PocketCard: React.FC<PocketCardProps> = ({ id, goalName, goalTarget, amountSaved, removeGoal }) => {
  const progressPercentage = (amountSaved / goalTarget) * 100;
  const foregroundWidth = Math.max((350 * progressPercentage) / 100, 0.1 * 350); // minimum width is now 10%





  const handleDelete = () => {
    Alert.alert(
      'Delete Goal',
      `Are you sure you want to delete ${goalName}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => removeGoal(id) },
      ]
    );
  };

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.heading}>{goalName}</Text>
        <TouchableOpacity onPress={handleDelete}>
          <Text style={styles.delete}>Delete {goalName}</Text>
        </TouchableOpacity>
      <View style={styles.savingBarBackground}>
        <View style={[styles.savingBarForeground, { width: foregroundWidth }]}>
          <Text style={styles.spending}>£{amountSaved}</Text>
        </View>
    </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    width: 375,
    height: 150,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignSelf: 'center',
  },
  savingBarBackground: {
    width: 350,
    height: 20,
    backgroundColor: '#FFDFDF',
    borderRadius: 10,
    overflow: 'hidden',
  },
  savingBarForeground: {
    height: 20,
    backgroundColor: '#FF4D4D',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'OpenDyslexic-Regular',
  },
  delete: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'OpenDyslexic-Regular',
  },
  spending: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
    
  },
});

export default PocketCard;
