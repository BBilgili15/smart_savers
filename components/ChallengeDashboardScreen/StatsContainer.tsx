import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

type StatsContainerProps = {};

const StatsContainer: React.FC<StatsContainerProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stats & Streaks</Text>
      {/* Add your game statistics and graphs here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 300,
    backgroundColor: '#F6F6F6', // Light gray color
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default StatsContainer;
