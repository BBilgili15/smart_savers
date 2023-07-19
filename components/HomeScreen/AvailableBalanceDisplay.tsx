import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type AvailableBalanceProps = {
  currentUser: any;
};

const AvailableBalanceDisplay: React.FC<AvailableBalanceProps> = ({ currentUser }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Balance: {currentUser ? '£' + currentUser.balance.toFixed(2) : null}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4ac0ae',
    width: 300,
    height: 100,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // margin: 10,
    borderColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default AvailableBalanceDisplay;
