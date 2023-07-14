import {View, Text, ProgressBarAndroidComponent} from 'react-native'
import {useState, useEffect} from 'react'
import React from 'react'

import { getUser } from '../services/UserServices';

// import components
import AvailableBalanceDisplay from '../components/HomeScreen/AvailableBalanceDisplay';
import UpdateBalance from '../components/HomeScreen/UpdateBalance';
import UserProfile from '../components/HomeScreen/UserProfile';
import LevelProgressBar from '../components/HomeScreen/LevelProgressBar';

type HomeScreenProps = {
  currentUser: {
    id: number;
    userName: string;
    parentEmail: string;
    points: number;
    level: any;
    balance: number;
  } | null;
  availableAmount: number;
  setAvailableAmount: (amount: number) => void;
};

  const HomeScreen: React.FC<HomeScreenProps> = ({currentUser,availableAmount, setAvailableAmount}) => {
    

   


  return (
    <View>
        <UserProfile currentUser={currentUser}/>
        <LevelProgressBar currentUser={currentUser}/>
        <AvailableBalanceDisplay currentUser={currentUser}/>
        <UpdateBalance currentUser={currentUser} />
    </View>
  )
}

export default HomeScreen