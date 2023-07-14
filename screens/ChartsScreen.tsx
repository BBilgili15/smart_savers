import React, { useState } from 'react';
import { View, Text } from 'react-native';
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
		// user:object
  }[] | null
};

const ChartsScreen: React.FC<ChartsScreenProps> = ({currentUser, userTransactions }) => {
  const [selectedTab, setSelectedTab] = useState<string>('income');


  return (
    <>
      <View style={{ flex: 1 }}>
        <Toggle selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <Chart selectedTab={selectedTab} setSelectedTab={setSelectedTab} currentUser={currentUser} userTransactions={userTransactions}/>
      </View>
    </>
  );
};

export default ChartsScreen;
