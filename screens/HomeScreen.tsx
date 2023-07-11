import {View, Text} from 'react-native'
import {useState} from 'react'
import React from 'react'

// import components
import AvailableBalanceDisplay from '../components/AvailableBalanceDisplay';
import UpdateBalance from '../components/UpdateBalance';

  type HomeScreenProps = {
    availableAmount: number;
    setAvailableAmount: (amount:number) => void;
  };

  const HomeScreen: React.FC<HomeScreenProps> = ({availableAmount, setAvailableAmount}) => {
    
   


  return (
    <View>
        <AvailableBalanceDisplay availableAmount={availableAmount}/>
        <UpdateBalance availableAmount={availableAmount} setAvailableAmount={setAvailableAmount}/>
    </View>
  )
}

export default HomeScreen