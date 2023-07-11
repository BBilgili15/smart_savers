import {View, Text, ProgressBarAndroidComponent} from 'react-native'
import {useState} from 'react'
import React from 'react'

// import components
import AvailableBalanceDisplay from '../components/HomeScreen/AvailableBalanceDisplay';
import UpdateBalance from '../components/HomeScreen/UpdateBalance';
import UserProfile from '../components/HomeScreen/UserProfile';
import LevelProgressBar from '../components/HomeScreen/LevelProgressBar';

  type HomeScreenProps = {
    availableAmount: number;
    setAvailableAmount: (amount:number) => void;
  };

  const HomeScreen: React.FC<HomeScreenProps> = ({availableAmount, setAvailableAmount}) => {
    
   


  return (
    <View>
        <UserProfile/>
        <LevelProgressBar/>
        <AvailableBalanceDisplay availableAmount={availableAmount}/>
        <UpdateBalance availableAmount={availableAmount} setAvailableAmount={setAvailableAmount}/>
    </View>
  )
}

export default HomeScreen