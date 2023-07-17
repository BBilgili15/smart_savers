import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import React from 'react';

type PocketInformationContainerProps = {
  handleButtonClick: () => void;
};

const PocketInformationContainer: React.FC<PocketInformationContainerProps> = ({ handleButtonClick }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.balanceText}>Total Pocket Balance:</Text>
      <Text style={styles.balanceAmount}>£67.98</Text>
      <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
        <Text style={styles.buttonText}>New Pocket +</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    width: 400,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
  },
  balanceText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', 
    textAlign: 'center',
  },
  balanceAmount: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0F907B', 
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'lightpink',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});


export default PocketInformationContainer;
