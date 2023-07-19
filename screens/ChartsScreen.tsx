import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Chart from '../components/ChartScreen/Chart';
import Toggle from '../components/ChartScreen/Toggle';

type ChartsScreenProps = {
  currentUser: {
    id: number;
    userName: string;
    parentEmail: string;
    points: number;
    level: any;
    balance: number;
  } | null;
  userTransactions:{
    id: number,
    category: any,
    amount: number,
    user:any
    // user:object
  }[] | null
};
const ChartsScreen: React.FC<ChartsScreenProps> = ({currentUser, userTransactions }) => {
  const [selectedTab, setSelectedTab] = useState<string>('income');
  return (
    <>
      <ScrollView style={{ flex: 1}}>
        <Toggle selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <Chart selectedTab={selectedTab} setSelectedTab={setSelectedTab} currentUser={currentUser} userTransactions={userTransactions}/>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b7ffb7'
  },
});


export default ChartsScreen;
