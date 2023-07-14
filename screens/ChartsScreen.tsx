import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Chart from '../components/ChartScreen/Chart';
import Toggle from '../components/ChartScreen/Toggle';

type ChartsScreenProps = {};

const ChartsScreen: React.FC<ChartsScreenProps> = () => {
  const [selectedTab, setSelectedTab] = useState<string>('income');

  return (
    <>
      <View style={{ flex: 1 }}>
        <Toggle selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
   
        <Chart selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </View>
    </>
  );
};

export default ChartsScreen;
