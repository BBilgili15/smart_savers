import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

type PocketCardProps = {};

const PocketCard: React.FC<PocketCardProps> = () => {
  const [currentAmount, setCurrentAmount] = useState(70);
  const savingsGoal = 100;
  const progressPercentage = (currentAmount / savingsGoal) * 100;

  const foregroundWidth = (350 * progressPercentage) / 100;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>New Trainers</Text>
      <Text style={styles.subheading}>Saving Pocket</Text>
      <View style={styles.savingBarBackground}>
        <View style={[styles.savingBarForeground, { width: foregroundWidth }]}>
          <Text style={styles.spending}>£{currentAmount.toFixed(2)}</Text>
        </View>
      </View>
    </View>
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
  },
  subheading: {
    fontSize: 16,
    color: '#666',
  },
  spending: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default PocketCard;
